<?php


namespace app\validate;


use think\Validate;

class User extends Validate
{
    protected $rule = [
        'username' => 'require|max:25|min:6',
        'password' => 'require|max:25|min:6'
    ];


    protected $message = [
        'username' => '名称必须是6-20个字符',
        'password' => '密码必须是6-25个字符'
    ];
}