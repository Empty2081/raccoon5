<?php


namespace app\service;

use app\model\UserFinance;
use app\model\UserOrder;
use app\model\UserBuy;
use app\model\Chapter;
use app\model\Book;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;

class FinanceService
{
    public function getPagedOrders($where = '1=1')
    {
        $page = config('page.back_end_page');
        $data = UserOrder::where($where)->order('id', 'desc');
        $orders = $data->paginate(
            [
                'list_rows'=> $page,
                'query' => request()->param(),
                'var_page' => 'page',
            ]);
        return [
            'orders' => $orders,
            'count' => $data->count()
        ];
    }

    public function getPagedFinance($where = '1=1')
    {
        $page = config('page.back_end_page');
        $data = UserFinance::where($where)->order('id', 'desc');
        $finances = $data->paginate(
            [
                'list_rows'=> $page,
                'query' => request()->param(),
                'var_page' => 'page',
            ]);
        return [
            'finances' => $finances,
            'count' => $data->count()
        ];
    }

    public function getPagedBuyHistory()
    {
        $page = config('page.back_end_page');
        $data = UserBuy::order('id', 'desc');
        $buys = $data->paginate(
            [
                'list_rows'=> $page,
                'query' => request()->param(),
                'var_page' => 'page',
            ]);

        try {
            foreach ($buys as &$buy) {
                $buy['chapter'] = Chapter::findOrFail($buy->chapter_id);
                $buy['book'] = Book::findOrFail($buy->book_id);
            }
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }

        return [
            'buys' => $buys,
            'count' => $data->count()
        ];
    }

    public function getUserChargeHistory($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', '=', 1];
        $charges = UserFinance::where($map)->paginate(
            [
                'list_rows'=> 10,
                'query' => request()->param(),
                'var_page' => 'page',
            ]);

        return $charges;
    }

    public function getUserSpendingHistory($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', 'in',[2 ,3]];

        $spendings = UserFinance::where($map)->paginate(
            [
                'list_rows'=> 10,
                'query' => request()->param(),
                'var_page' => 'page',
            ]);
        return $spendings;
    }

    public function getUserBuyHistory($uid, $end_point)
    {
        $buys = UserBuy::where('user_id', '=', $uid)->order('id', 'desc')
            ->paginate(10, false);
        try {
            foreach ($buys as &$buy) {
                $chapter = Chapter::findOrFail($buy['chapter_id']);
                $book = Book::findOrFail($buy['book_id']);
                if ($end_point == 'id') {
                    $book['param'] = $book['id'];
                } else {
                    $book['param'] = $book['unique_id'];
                }
                $buy['chapter'] = $chapter;
                $buy['book'] = $book;
            }
            $pages = $buys->toArray();

        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }

        return [
            'buys' =>  $buys,
            'page' => [
                'total' => $pages['total'],
                'per_page' => $pages['per_page'],
                'current_page' => $pages['current_page'],
                'last_page' => $pages['last_page'],
                'query' => request()->param()
            ]
        ];
    }

    //获得当前用户充值总和
    public function getChargeSum($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', 'in', [1, 4, 5]];
        $sum = UserFinance::where($map)->sum('money');
        return $sum;
    }

    //获得当前用户消费总和
    public function getSpendingSum($uid)
    {
        $map = array();
        $map[] = ['user_id', '=', $uid];
        $map[] = ['usage', 'in', [2, 3]];
        $sum = UserFinance::where($map)->sum('money');
        return $sum;
    }

    public function getBalance($uid)
    {
        $charge_sum = $this->getChargeSum($uid);
        $spending_sum = $this->getSpendingSum($uid);
        return $charge_sum - $spending_sum;
    }
}