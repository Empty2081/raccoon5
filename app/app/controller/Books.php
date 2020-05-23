<?php


namespace app\app\controller;


use app\common\RedisHelper;
use app\model\Area;
use app\model\Author;
use app\model\Book;
use app\model\Chapter;
use app\model\Comments;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;

class Books extends Base
{
    protected $bookService;


    public function initialize()
    {
        parent::initialize();
        $this->bookService = app('bookService');
    }

    public function getNewest()
    {
        $newest = cache('app:newest_homepage');
        if (!$newest) {
            $newest = Book::limit(10)->order('last_time', 'desc')->select();
            foreach ($newest as &$book) {
                //$book['chapter_count'] = Chapter::where('book_id','=', $book['id'])->count();
                if(substr( $book->cover_url, 0, 4 ) === "http") {

                } else {
                    $book->cover_url = $this->url.$book->cover_url;
                }
            }
            cache('newest_homepage', $newest, null, 'redis');
        }
        $result = [
            'success' => 1,
            'newest' => $newest
        ];
        return json($result);
    }

    public function getHot()
    {
        $hot_books = cache('app:hot_books');
        if (!$hot_books) {
            $hot_books =$this->bookService->getHotBooks($this->prefix, $this->end_point);
            foreach ($hot_books as &$book) {
                if(substr( $book->cover_url, 0, 4 ) === "http") {

                } else {
                    $book->cover_url = $this->url.$book->cover_url;
                }
            }
            cache('hot_books', $hot_books, null, 'redis');
        }
        $result = [
            'success' => 1,
            'hots' => $hot_books
        ];
        return json($result);
    }

    public function getEnds()
    {
        $ends = cache('app:ends_homepage');
        if (!$ends) {
            $ends = Book::limit(10)->order('last_time', 'desc')->select();
            foreach ($ends as &$book) {
                //$book['chapter_count'] = Chapter::where('book_id','=', $book['id'])->count();
                if(substr( $book->cover_url, 0, 4 ) === "http") {

                } else {
                    $book->cover_url = $this->url.$book->cover_url;
                }
            }
            cache('ends_homepage', $ends, null, 'redis');
        }
        $result = [
            'success' => 1,
            'ends' => $ends
        ];
        return json($result);
    }

    public function search()
    {
        $keyword = input('keyword');
        $redis = RedisHelper::GetInstance();
        $redis->zIncrBy($this->redis_prefix . 'hot_search:', 1, $keyword);
        $hot_search_json = $redis->zRevRange($this->redis_prefix . 'hot_search', 1, 4, true);
        $hot_search = array();
        foreach ($hot_search_json as $k => $v) {
            $hot_search[] = $k;
        }
        $books = cache('appsearchresult:' . $keyword);
        if (!$books) {
            $books = $this->bookService->search($keyword, 20, $this->prefix);
            foreach ($books as &$book) {
                $author = Author::find($book['author_id']);
                if ($author) {
                    $book['author'] = $author;
                } else {
                    $book['author'] = '佚名';
                }
                if(substr($book['cover_url'], 0, 4 ) === "http") {

                } else {
                    $book['cover_url'] = $this->url . $book['cover_url'];
                }
            }
            cache('appsearchresult:' . $keyword, $books, null, 'redis');
        }


        $result = [
            'success' => 1,
            'books' => $books,
            'count' => count($books),
            'hot_search' => $hot_search
        ];
        return json($result);
    }

    public function detail()
    {
        $id = input('id');
        $book = cache('app:book:' . $id);
        if ($book == false) {
            try {
                $book = Book::with('area')->find($id);
                if(substr( $book->cover_url, 0, 4 ) === "http") {

                } else {
                    $book->cover_url = $this->url.$book->cover_url;
                }
            } catch (DataNotFoundException $e) {
                return json(['success' => 0, 'msg' => '该漫画不存在']);
            } catch (ModelNotFoundException $e) {
            } catch (DbException $e) {
            }
            cache('book:' . $id, $book, null, 'redis');
        }

        $redis = RedisHelper::GetInstance();
        $day = date("Y-m-d", time());
        //以当前日期为键，增加点击数
        $redis->zIncrBy('click:' . $day, 1, $book->id);

        $start = cache('book_start:' . $id);
        if ($start == false) {
            $db = Db::query('SELECT id FROM ' . $this->prefix . 'chapter WHERE book_id = ' . $id . ' ORDER BY id LIMIT 1');
            $start = $db ? $db[0]['id'] : -1;
            cache('book_start:' . $id, $start, null, 'redis');
        }

        $book['start'] = $start;
        $result = [
            'success' => 1,
            'book' => $book
        ];
        return json($result);
    }

    public function getComments()
    {
        $book_id = input('book_id');
        $comments = cache('comments:' . $book_id);
        if (!$comments) {
            $comments = Comments::with('user')->where('book_id', '=', $book_id)
                ->order('create_time', 'desc')->limit(0, 10)->select();
            cache('comments:' . $book_id, $comments);
        }
        $result = [
            'success' => 1,
            'comments' => $comments
        ];
        return json($result);
    }

    public function getRecommend(){
        $book_id = input('book_id');
        try {
            $book = Book::findOrFail($book_id);
            $recommends = cache('randBooks:'.$book->tags);
            if (!$recommends) {
                $recommends = $this->bookService->getRecommand($book->tags, $this->end_point);
                foreach ($recommends as &$book) {
                    if(substr( $book->cover_url, 0, 4 ) === "http") {

                    } else {
                        $book->cover_url = $this->url.$book->cover_url;
                    }
                }
                cache('randBooks:'.$book->tags, $recommends, null, 'redis');
            }
            foreach ($recommends as &$recommend){
                $recommend['area_name'] = Area::find($recommend['area_id'])['area_name'];
            }
            $result = [
                'success' => 1,
                'recommends' => $recommends
            ];
            return json($result);
        } catch (DataNotFoundException $e) {
            return ['success' => 0, 'msg' => '漫画不存在'];
        } catch (ModelNotFoundException $e) {
            return ['success' => 0, 'msg' => '漫画不存在'];
        }
    }
}