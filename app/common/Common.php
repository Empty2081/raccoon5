<?php


namespace app\common;

class Common
{
    function sendcode($uid, $_phone,$code){
        if (empty($uid) || is_null($uid)){
            return '非法调用';
        }
        $redis = RedisHelper::GetInstance();
        if ($redis->exists('sms_lock:'.$uid)){ //如果存在锁
            return ['status' => '-3','msg' => '操作太频繁'];
        }else {
            $redis->set('sms_lock:' . $uid, 1, 60); //写入锁
            $statusStr = array(
                "0" => "短信验证码已经发送至" . $_phone,
                "-1" => "参数不全",
                "-2" => "服务器空间不支持,请确认支持curl或者fsocket，联系您的空间商解决或者更换空间！",
                "30" => "密码错误",
                "40" => "账号不存在",
                "41" => "余额不足",
                "42" => "帐户已过期",
                "43" => "IP地址限制",
                "50" => "内容含有敏感词"
            );
            $smsapi = "http://api.smsbao.com/";
            $user = config('sms.username'); //短信平台帐号
            $pass = md5(config('sms.password')); //短信平台密码
            $content = '您正在验证/修改手机，验证码为'.$code;//要发送的短信内容
            $phone = $_phone;//要发送短信的手机号码
            $sendUrl = $smsapi . "sms?u=" . $user . "&p=" . $pass . "&m=" . $phone . "&c=" . urlencode($content);
            $result = file_get_contents($sendUrl);
            return ['status' => $result, 'msg' => $statusStr[$result]] ;
        }
        //return ['status' => '0','msg' => $code];
    }

    function shorturl($url) {
        $shortUrl = cache($url);
        if (!$shortUrl) {
            $appkey = '';
            $long_url = urlencode($url);
            $sign = md5(appkey.md5($long_url));
            $sendUrl = "http://www.mynb8.com/api/sina?appkey=".$appkey."&sign=".$sign."&long_url=".$long_url;
            $result = json_decode(file_get_contents($sendUrl), true);
            if ((int)$result['rs_code'] == 0) {
                $shortUrl = $result['data']['short_url'];
            }
            cache($url, $shortUrl);
        }
        return $shortUrl;
    }
}