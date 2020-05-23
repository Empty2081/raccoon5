<?php


namespace app\admin\controller;

use app\service\AdminService;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;
use app\model\Admin;

class Admins extends BaseAdmin
{
    public function index(){
        $adminService = app('adminService');
        $data = $adminService->GetAll();
        View::assign([
            'admins' => $data['admins'],
            'count' => $data['count']
        ]);
        return view();
    }

    public function create(){
        if(request()->isPost()) {
            $data = request()->param();
            try {
                Admin::where('username', '=', trim($data['username']))->findOrFail();
                return json(['err' => 1, 'msg' => '存在同名账号']);
            } catch (DataNotFoundException $e) {
            } catch (ModelNotFoundException $e) {
                $admin = new Admin();
                $admin->username = $data['username'];
                $admin->password = trim($data['password']);
                $result = $admin->save();
                if ($result) {
                    return json(['err' =>0,'msg'=>'添加成功']);
                }else{
                    return json(['err' =>1,'msg'=>'添加失败']);
                }
            }
        }
        return view();
    }

    public function edit(){
        $data = request()->param();
        try {
            $admin = Admin::findOrFail($data['id']);
            if (request()->isPost()) {
                $admin->username = $data['username'];
                if (!empty($data['password'])){
                    $admin->password =trim($data['password']);
                }
                $result = $admin->save();
                if ($result) {
                    return json(['err' =>0,'msg'=>'修改成功']);
                }else{
                    return json(['err' =>1,'msg'=>'修改失败']);
                }
            }
            View::assign([
                'admin' => $admin,
            ]);
            return view();
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }
    }

    public function delete(){
        $id = input('id');
        $count = count(Admin::select());
        if ($count <= 1){
            return json(['err' => '1','msg' => '至少保留一个管理员账号']);
        }
        $result = Admin::destroy($id);
        if ($result) {
            return json(['err' => '0','msg' => '删除成功']);
        } else {
            return json(['err' => '1','msg' => '删除失败']);
        }
    }
}