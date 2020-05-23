<?php

namespace app\pay;


use app\BaseController;
use think\App;

class Pay
{

    public function submit($order_id, $money, $pay_type, $pay_code)
    {
        $mch_id = trim(config('payment.pay.appid'));//这里改成支付ID
        $mch_key = trim(config('payment.pay.appkey')); //这是您的通讯密钥
        $data = array(
            "mch_uid" => $mch_id,//你的支付ID
            "out_trade_no" => $order_id, //唯一标识 可以是用户ID,用户名,session_id(),订单ID,ip 付款后返回
            "pay_type_id" => (int)$pay_code,//1微信支付 2支付宝
            "total_fee" => $money,//金额
            "notify_url" => config('site.schema').config('site.api_domain') . '/paynotify',//通知地址
            "return_url" => config('site.schema').config('site.domain') . '/feedback',//跳转地址
            "mepay_type" => 2
        ); //构造需要传递的参数
        ksort($data); //重新排序$data数组
        reset($data); //内部指针指向数组中的第一个元素
        $sign = ''; //初始化需要签名的字符为空
        $urls = ''; //初始化URL参数为空

        foreach ($data AS $key => $val) { //遍历需要传递的参数
            if ($val == '' || $key == 'sign') continue; //跳过这些不参数签名
            if ($sign != '') { //后面追加&拼接URL
                $sign .= "&";
                $urls .= "&";
            }
            $sign .= "$key=$val"; //拼接为url参数形式
            $urls .= "$key=" . urlencode($val); //拼接为url参数形式并URL编码参数值
        }

        $query = $urls . '&sign=' . md5($sign . $mch_key); //创建订单所需的参数
        $url = "https://www.zhapay.com/pay.html?{$query}"; //支付页面
        header("Location:{$url}"); //跳转到支付页面
    }
}