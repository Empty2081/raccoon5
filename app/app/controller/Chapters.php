<?php


namespace app\app\controller;


use app\model\Chapter;
use app\model\UserBuy;
use Firebase\JWT\JWT;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;

class Chapters extends Base
{
    public function getList()
    {
        $book_id = input('book_id');

        $chapters = cache('chapters:' . $book_id);
        if (!$chapters) {
            $chapters = Chapter::where('book_id', '=', $book_id)->select();
            cache('chapters:' . $book_id, $chapters, null, 'redis');
        }

        $result = [
            'success' => 1,
            'chapters' => $chapters
        ];
        return json($result);
    }

    public function detail()
    {
        $id = input('id');
        $utoken = input('utoken');
        if (isset($utoken)) {
            $key = config('site.api_key');
            $info = JWT::decode($utoken, $key, array('HS256', 'HS384', 'HS512', 'RS256' ));
            $arr = (array)$info;
            $this->uid = $arr['uid'];
            $this->vip_expire_time = $arr['vip_expire_time'];
        }
        try {
            $chapter = cache('app:chapter:' . $id);
            if (!$chapter) {
                $chapter = Chapter::with(['photos' => function ($query) {
                    $query->order('pic_order');
                }, 'book'])->findOrFail($id);
                foreach ($chapter['photos'] as &$photo) {
                    if (!(substr($photo->img_url, 0, 4) === 'http')) {
                        $photo->img_url = $this->url . $photo->img_url;
                    }
                }
				cache('app:chapter:' . $id, $chapter, null, 'redis');
            }

            $flag = true;
            if ($chapter->book->start_pay >= 0) {
                if ($chapter->chapter_order >= $chapter->book->start_pay) { //如果本章序大于起始付费章节，则是付费章节
                    $flag = false;
                }
            } else { //如果是倒序付费设置
                $abs = abs($chapter->book->start_pay) - 1; //取得倒序的绝对值，比如-2，则是倒数第2章开始付费
                $max_chapter_order = cache('maxChapterOrder:' . $chapter->book_id);
                if (!$max_chapter_order) {
                    $max_chapter_order = Db::query("SELECT MAX(chapter_order) as max FROM " . $this->prefix . "chapter WHERE book_id=:id",
                        ['id' => $chapter->book_id])[0]['max'];
                    cache('maxChapterOrder:' . $chapter->book_id, $max_chapter_order);
                }
                $start_pay = (float)$max_chapter_order - $abs; //计算出起始付费章节
                if ($chapter->chapter_order >= $start_pay) { //如果本章序大于起始付费章节，则是付费章节
                    $flag = false;
                }
            }

            if(!$flag) { //如果需要付费，再判断用户是否登录
                if (!is_null($this->uid)) { //如果用户已经登录
                    $time = $this->vip_expire_time - time(); //计算vip用户时长
                    if ($time > 0) { //如果是vip会员且没过期，则可以不受限制
                        $flag = true;
                    } else { //如果不是会员，则判断用户是否购买本章节
                        $map[] = ['user_id', '=', $this->uid];
                        $map[] = ['chapter_id', '=', $id];
                        $userBuy = UserBuy::where($map)->find();
                        if (!is_null($userBuy)) { //如果购买了
                            $flag = true;
                        }
                    }
                }
            }

            if ($flag) {
                $book_id = $chapter->book_id;
                $prev = cache('chapter_prev:' . $id);
                if (!$prev) {
                    $prev = Db::query(
                        'select * from ' . $this->prefix . 'chapter where book_id=' . $book_id . ' and chapter_order<' . $chapter->chapter_order . ' order by id desc limit 1');
                    cache('chapter_prev:' . $id, $prev, null, 'redis');
                }
                $next = cache('chapter_next:' . $id);
                if (!$next) {
                    $next = Db::query(
                        'select * from ' . $this->prefix . 'chapter where book_id=' . $book_id . ' and chapter_order>' . $chapter->chapter_order . ' order by id limit 1');
                    cache('chapter_next:' . $id, $next, null, 'redis');
                }

                $chapter['prev'] = count($prev) > 0 ? $prev[0]['id'] : null;
                $chapter['next'] = count($next) > 0 ? $next[0]['id'] : null;

                $chapters = cache('chapters:' . $book_id);
                if (!$chapters) {
                    $chapters = Chapter::where('book_id', '=', $book_id)->select();
                    cache('chapters:' . $book_id, $chapters, null, 'redis');
                }

                $result = [
                    'success' => 1,
                    'chapter' => $chapter,
                    'chapters' => $chapters
                ];

            } else {
                $result = [
                    'success' => 0,
                    'money' => $chapter->book->money
                ];
            }
            return json($result);
        } catch (DataNotFoundException $e) {
            return json(['success' => 0, 'msg' => '章节id错误']);
        } catch (ModelNotFoundException $e) {
            return json(['success' => 0, 'msg' => '章节id错误']);
        }
    }
}