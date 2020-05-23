<?php


namespace app\admin\controller;

use app\model\Banner;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use think\exception\ValidateException;
use think\facade\View;

class Banners extends BaseAdmin
{
    public function index()
    {
        $data = Banner::with('book');
        $banners = $data->order('id','desc')->paginate(5, false,
            [
                'query' => request()->param(),
                'var_page' => 'page',
            ]);
        View::assign([
            'banners' => $banners,
            'count' => $data->count()
        ]);
        return view();
    }

    public function create()
    {
        if (request()->isPost()) {
            $banner = new Banner();
            $banner->title = input('title');
            $banner->book_id = input('book_id');
            $banner->banner_order = input('banner_order');
            $dir = 'banners';
            if (request()->file() != null) {
                $cover = request()->file('pic_name');
                try {
                    validate(['image'=>'filesize:10240|fileExt:jpg,png,gif'])
                        ->check((array)$cover);
                    $savename =str_replace ( '\\', '/',
                        \think\facade\Filesystem::disk('public')->putFile($dir, $cover));
                    if (!is_null($savename)) {
                        $banner->pic_name = str_replace('\\','/', $savename) ;
                    }
                } catch (ValidateException $e) {
                    abort(404, $e->getMessage());
                }
            }
            $result = $banner->save();
            if ($result) {
                $this->success('添加成功');
            } else {
                throw new ValidateException('添加失败');
            }
        }
        return view();
    }

    public function edit()
    {
        $id = input('id');
        try {
            $banner = Banner::findOrFail($id);
            if (request()->isPost()) {
                $banner->title = input('title');
                $banner->book_id = input('book_id');
                $banner->banner_order = input('banner_order');
                $dir = 'banners';
                if (request()->file() != null) {
                    $cover = request()->file('pic_name');
                    try {
                        validate(['image'=>'filesize:10240|fileExt:jpg,png,gif'])
                            ->check((array)$cover);
                        $savename =str_replace ( '\\', '/',
                            \think\facade\Filesystem::disk('public')->putFile($dir, $cover));
                        if (!is_null($savename)) {
                            $banner->pic_name = str_replace('\\','/', $savename) ;
                        }
                    } catch (ValidateException $e) {
                        abort(404, $e->getMessage());
                    }
                }
                $result = $banner->save();
                if ($result) {
                    $this->success('编辑成功');
                } else {
                    throw new ValidateException('修改失败');
                }
            }
            View::assign([
                'banner' => $banner,
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
        $result = Banner::destroy($id);
        if ($result) {
            return ['err' => 0, 'msg' => '删除成功'];
        } else {
            return ['err' => 1, 'msg' => '删除失败'];
        }
    }

    public function deleteAll($ids){
        Banner::destroy($ids);
    }
}