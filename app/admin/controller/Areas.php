<?php


namespace app\admin\controller;

use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\facade\View;
use app\model\Area;

class Areas extends BaseAdmin
{
    public function index()
    {
        $areas = Area::select();
        View::assign([
            'areas' => $areas,
            'count' => count($areas)
        ]);
        return view();
    }

    public function create()
    {
        if (request()->isPost()) {
            $aname = trim(input('area_name'));
            try {
                $area = Area::where('area_name', '=', $aname)->findOrFail();
                return json(['err' => 1, 'msg' => '已经存在相同地区']);
            } catch (DataNotFoundException $e) {
            } catch (ModelNotFoundException $e) {
                $area = new Area();
                $area->area_name = $aname;
                $result = $area->save();
                if ($result) {
                    return json(['err' =>0,'msg'=>'添加成功']);
                }else{
                    return json(['err' =>1,'msg'=>'添加失败']);
                }
            }
        }
        return view();
    }

    public function edit()
    {
        $id = input('id');
        try {
            $area = Area::findOrFail($id);
            if (request()->isPost()) {
                $aname = trim(input('area_name'));
                try {
                    Area::where('area_name', '=', $aname)->findOrFail();
                    return json(['err' =>1,'msg'=>'存在相同地区']);
                } catch (DataNotFoundException $e) {
                } catch (ModelNotFoundException $e) {
                    $area->area_name = $aname;
                    $result = $area->save();
                    if ($result) {
                        return json(['err' =>0,'msg'=>'修改成功']);
                    }else{
                        return json(['err' =>1,'msg'=>'修改失败']);
                    }
                }
            }
            View::assign([
                'area' => $area,
            ]);
            return view();
        } catch (DataNotFoundException $e) {
            abort(404, $e->getMessage());
        } catch (ModelNotFoundException $e) {
            abort(404, $e->getMessage());
        }



    }

    public function delete()
    {
        $id = input('id');
        $result = Area::destroy($id);
        if ($result) {
            return json(['err' => '0','msg' => '删除成功']);
        } else {
            return json(['err' => '1','msg' => '删除失败']);
        }
    }

    public function deleteAll($ids){
        $ids = input('ids');
        $result = Area::destroy($ids);
        if ($result) {
            return json(['err' => '0','msg' => '删除成功']);
        } else {
            return json(['err' => '1','msg' => '删除失败']);
        }
    }
}