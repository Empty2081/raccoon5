<?php


namespace app\service;

use app\model\Book;
use app\model\User;
use app\model\UserFavor;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;

class UserService
{
    public function getAdminPagedUsers($status, $where, $orderBy, $order)
    {
        if ($status == 1) { //正常用户
            $data = User::where($where)->order($orderBy, $order);
        } else {
            $data = User::onlyTrashed()->where($where)->order($orderBy, $order);
        }
        $financeService = new FinanceService();
        $page = config('page.back_end_page');
        $users = $data->paginate(
            [
                'list_rows'=> $page,
                'query' => request()->param(),
                'var_page' => 'page',
            ])->each(function ($item, $key) use($financeService){
            $item['balance'] = $financeService->getBalance($item->id);
        });
        return [
            'users' => $users,
            'count' => $data->count()
        ];
    }

    public function getFavors($uid, $end_point)
    {
        try {
            $where[] = ['user_id', '=', $uid];
            $data = UserFavor::where($where)->order('create_time', 'desc')->paginate(10, false);
            $books = array();
            foreach ($data as &$favor) {
                $book = Book::findOrFail($favor->book_id);
                if ($end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
                $books[] = $book->toArray();
            }
            $pages = $data->toArray();
            return [
                'books' => $books,
                'page' => [
                    'total' => $pages['total'],
                    'per_page' => $pages['per_page'],
                    'current_page' => $pages['current_page'],
                    'last_page' => $pages['last_page'],
                    'query' => request()->param()
                ]
            ];
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
    }

    public function delFavors($uid, $ids)
    {
        $where[] = ['user_id', '=', $uid];
        $where[] = ['book_id', 'in', $ids];
        $favors = UserFavor::where($where)->selectOrFail();
        foreach ($favors as $favor) {
            $favor->delete();
        }
     }
}