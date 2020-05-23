<?php


namespace app\model;


use think\Model;

class Author extends Model
{
    public function books(){
        return $this->hasMany('book');
    }

    public function setAuthorNameAttr($value){
        return trim($value);
    }
}