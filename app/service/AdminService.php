<?php


namespace app\service;

use app\model\Admin;
class AdminService
{
    public function GetAll()
    {
        $data = Admin::order('id', 'desc');
        $page = config('page.back_end_page');
        $admins = $data->paginate([
                'query' => request()->param(),
                'list_rows'=> $page,
                'var_page' => 'page',
            ]);
        return [
            'admins' => $admins,
            'count' => $data->count()
        ];
    }
}