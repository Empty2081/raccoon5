<?php


namespace app\api\controller;


use app\BaseController;
use app\model\ChapterLogs;
use Overtrue\Pinyin\Pinyin;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use app\model\Photo;
use app\model\BookLogs;
use app\model\Author;
use app\model\Book;
use app\model\Chapter;
class PostBot extends BaseController
{
    public function save()
    {
        if (request()->isPost()) {
            $data = request()->param();
            $key = $data['api_key'];
            if (empty($key) || is_null($key)) {
                return json([
                    'id' => 'fail',
                    'target' => $data["src_url"],
                    'desc' => 'api密钥不能为空',
                    'error' => 'api密钥不能为空'
                ]);
            }
            if ($key != config('site.api_key')) {
                return json([
                    'id' => 'fail',
                    'target' => $data["src_url"],
                    'desc' => 'api密钥错误',
                    'error' => 'api密钥错误'
                ]);
            }

            $book_id = -1;
            $where[] = ['src_url','=',$data['src_url']];
            $where[] = ['src','=',$data['src']];
            $booklog = Booklogs::where($where)->find();
            if (is_null($booklog)) { //如果漫画不存在
                $author = Author::where('author_name', '=', trim($data['author']))->find();
                if (is_null($author)) {//如果作者不存在
                    $author = new Author();
                    $author->author_name = $data['author'] ?: '侠名';
                    $author->save();
                }
                $book = new Book();
                $book->author_id = $author->id;
                $book->author_name = $data['author'] ?: '侠名';
                $book->area_id = trim($data['area_id']);
                $book->book_name = trim($data['book_name']);
                if (!empty($data['nick_name']) || !is_null($data['nick_name'])) {
                    $book->nick_name = trim($data['nick_name']);
                }
                $book->tags = trim($data['tags']);
                $book->end = trim($data['end']);
                $book->cover_url = trim($data['cover_url']);
                $book->summary = trim($data['summary']);
                $book->last_time = time();
                $str = $this->convert($book->book_name); //生成标识
                if (Book::where('unique_id','=',$str)->select()->count() > 0) { //如果已经存在相同标识
                    $book->unique_id = md5(time() . mt_rand(1,1000000));
                    sleep(0.1);
                } else {
                    $book->unique_id = $str;
                }
                $book->save();
                $book_id = $book->id;

                $booklog = new BookLogs();
                $booklog->book_id = $book_id;
                $booklog->src_url = $data['src_url'];
                $booklog->src = $data['src'];
                $booklog->save();
            }
            else {
                $book_id = $booklog['book_id'];
                try {
                    $book = Book::findOrFail($book_id);
                    $book->update_time = time();
                    $book->save();
                } catch (DataNotFoundException $e) {
                    return json([
                        'id' => 'fail',
                        'target' => $data["src_url"],
                        'desc' => '发布失败',
                        'error' => '发布失败'
                    ]);
                } catch (ModelNotFoundException $e) {
                    return json([
                        'id' => 'fail',
                        'target' => $data["src_url"],
                        'desc' => '发布失败',
                        'error' => '发布失败'
                    ]);
                }

            }
            $this->addChapter($book_id, $data);
            return json([
                'id' => 'success',
                'target' => $data["src_url"],
                'desc' => '发布成功',
                'error' => '发布成功'
            ]);
        }
    }

    public function addChapter($book_id, $data)
    {
        $chapterlog = ChapterLogs::where('src_url','=',$data["src_url"])->find();
        if (empty($chapterlog)) {
            $chapter = new Chapter();
            $chapter->chapter_name = trim($data['chapter_name']);
            $chapter->book_id = $book_id;
            $lastChapterOrder = 0;
            $lastChapter = $this->chapterService->getLastChapter($book_id);
            if ($lastChapter) {
                $lastChapterOrder = $lastChapter->chapter_order;
            }
            $chapter->chapter_order = $lastChapterOrder + 1;
            $chapter->save();
            $chapterlog = new ChapterLogs();
            $chapterlog->chapter_id = $chapter->id;
            $chapterlog->src_url = $data["src_url"];
            $chapterlog->save();
            $preg = '/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/i';
            preg_match_all($preg, $data['images'], $img_urls);
            $lastOrder = 0;
            $lastPhoto = $this->photoService->getLastPhoto($chapter->id);
            if ($lastPhoto) {
                $lastOrder = $lastPhoto->pic_order + 1;
            }
            foreach ($img_urls[1] as $img_url) {
                $photo = new Photo();
                $photo->chapter_id = $chapter->id;
                $photo->pic_order = $lastOrder;
                $photo->img_url = $img_url;
                $photo->save();
                $lastOrder++;
            }
        }
    }

    protected function convert($str){
        $pinyin = new Pinyin();
        $name_format = config('seo.name_format');
        switch ($name_format) {
            case 'pure':
                $arr = $pinyin->convert($str);
                $str = implode($arr,'');
                halt($str);
                break;
            case 'abbr':
                $str = $pinyin->abbr($str);break;
            default:
                $str = $pinyin->convert($str);break;
        }
        return $str;
    }
}