<?php


namespace app\app\controller;

use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
class BaseAuth extends Base
{
    protected function initialize()
    {
        parent::initialize();
        $key = config('site.app_key');
        $param = request()->param();
        if (isset($param['utoken'])) {
            $utoken = $param['utoken'];
            try{
                $info = JWT::decode($utoken, $key, array('HS256', 'HS384', 'HS512', 'RS256' ));
                $arr = (array)$info;
                $this->uid = $arr['uid'];
                $this->vip_expire_time = $arr['vip_expire_time'];
            } catch (ExpiredException $e) {
                return json(['success' => 0, 'msg' => '请先登录'])->send();
            } catch (\Exception $e) {
                return json(['success' => 0, 'msg' => $e->getMessage()])->send();
            }
        } else {
            return json(['success' => 0, 'msg' => '用户未登录'])->send();
        }
    }
}