<?php


namespace app\api\controller;


use app\BaseController;
use app\model\UserFinance;
use app\model\UserOrder;
use app\service\PromotionService;

class Paynotify extends BaseController
{
    public function index()
    {
        $data = request()->param();
        ksort($data); //排序post参数
        reset($data); //内部指针指向数组中的第一个元素
        $pay_key = config('payment.zhapay.appkey'); //这是您的密钥
        $sign = '';//初始化
        foreach ($_POST AS $key => $val) { //遍历POST参数
            if ($val == '' || $key == 'sign') continue; //跳过这些不签名
            if ($sign) $sign .= '&'; //第一个字符串签名不加& 其他加&连接起来参数
            $sign .= "$key=$val"; //拼接为url参数形式
        }
        if (!$data['transaction_id'] || md5($sign . $pay_key) != $data['sign'] || $data['status'] != 1) { //不合法的数据
            return 'fail';  //返回失败 继续补单
        } else { //合法的数据
            //业务处理
            $order_id = str_replace('xwx_order_', '', $data['out_trade_no']);
            $type = 1; //默认支付宝
            if ($data['pay_type'] == 1) {
                $type = 3; //微信支付
            }
            $status = 0;
            if ((int)$data['status'] == 1) { //如果已支付，则更新用户财务信息
                $status=1;
                $order = UserOrder::find($order_id); //通过返回的订单id查询数据库
                if ($order) {
                    if ((int)$order->status == 0){
                        $order->money = $data['total_fee'];
                        $order->update_time = $data['paytime']; //云端处理订单时间戳
                        $order->status = $status;
                        $order->save(); //更新订单

                        $userFinance = new UserFinance();
                        $userFinance->user_id = $order->user_id;
                        $userFinance->money = $order->money;
                        $userFinance->usage = 1; //用户充值
                        $userFinance->summary = '幻兮支付';
                        $userFinance->save(); //存储用户充值数据

                        $promotionService = new PromotionService();
                        $promotionService->rewards($order->user_id, $order->money, 1); //调用推广处理函数
                    }
                }
            }
            return 'success';
        }
    }
}