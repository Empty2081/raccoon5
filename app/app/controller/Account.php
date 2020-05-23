<?php


namespace app\app\controller;


use app\common\RedisHelper;
use app\service\FinanceService;
use app\service\PromotionService;
use app\validate\User as UserValidate;
use app\model\User;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;
use Firebase\JWT\JWT;

class Account extends Base
{
    public function register()
    {
        $data = request()->param();
        $validate = new UserValidate();
        if ($validate->check($data)) {
            $user = User::where('username', '=', trim(request()->param('username')))->find();
            if ($user) {
                return json(['success' => 0, 'msg' => '用户名已存在']);
            } else {
                $user = new User();
                $user->username = trim(request()->param('username'));
                $user->password = trim(request()->param('password'));
//                if (!$pid || $pid == null) {
//                    $pid = 0;
//                }
//                $user->pid = $pid; //设置用户上线id
                $result = $user->save();
                if ($result) {
                    $promotionService = new PromotionService();
                    $promotionService->rewards($user->id, (float)config('payment.reg_rewards'), 2); //调用推广处理函数
                    return json(['success' => 1, 'msg' => '注册成功，请登录']);
                } else {
                    return json(['success' => 0, 'msg' => '注册失败，请尝试重新注册']);
                }
            }
        } else {
            return json(['success' => 0, 'msg' => $validate->getError()]);
        }
    }

    public function login()
    {
        $map = array();
        $map[] = ['username', '=', trim(request()->param('username'))];
        $map[] = ['password', '=', md5(strtolower(trim(request()->param('password'))) . config('site.salt'))];
        try {
            $user = User::withTrashed()->where($map)->findOrFail();
            if ($user->delete_time > 0) {
                return json(['success' => 0, 'msg' => '用户被锁定']);
            } else {
                $financeService = new FinanceService();
                $balance = $financeService->getBalance($user->id); //获取用户余额
                $key = config('site.api_key');
                $token = [
                    "iat" => time(), //签发时间
                    "nbf" => time(), //在什么时候jwt开始生效  （这里表示生成100秒后才生效）
                    "exp" => time() + 60 * 60 * 24, //token 过期时间
                    "uid" => $user->id, //记录的userid的信息，这里是自已添加上去的，如果有其它信息，可以再添加数组的键值对
                    "vip_expire_time" => $user->vip_expire_time,
                    "nick_name" => $user->nick_name,
                    "mobile" => $user->mobile,
                    "balance" => $balance
                ];
                $utoken = JWT::encode($token, $key, "HS256");
                $userInfo = [];
                $userInfo['uid'] = $user->id;
                $userInfo['username'] = $user->username;
                $userInfo['nick_name'] = $user->nick_name;
                $userInfo['mobile'] = $user->mobile;
                $userInfo['vip_expire_time'] = $user->vip_expire_time;
                $userInfo['utoken'] = $utoken;
                $userInfo['balance'] = $balance;

                return json(['success' => 1, 'userInfo' => $userInfo]);
            }
        } catch (DataNotFoundException $e) {
            return json(['success' => 0, 'msg' => '用户名或密码错误']);
        } catch (ModelNotFoundException $e) {
            return json(['success' => 0, 'msg' => '用户名或密码错误']);
        }
    }

    public function checkAuth()
    {
        $utoken = input('utoken');
        if (isset($utoken)) {
            $json = $this->getAuth($utoken);
        } else {
            $json = json(['success' => 0, 'msg' => '传递参数错误']);
        }
        return $json;
    }

    public function logout()
    {
        $uid = input('uid');
        $redis = RedisHelper::GetInstance();
        $redis->del('utoken:' . $uid);
        return ['success' => 1, 'msg' => '登出成功'];
    }
}