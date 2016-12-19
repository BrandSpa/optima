<?php

class Notification extends \Eloquent {

  protected $fillable = ['user_id', 'message', 'read'];

  protected static $rules = [];

  public function user()
  {
    return $this->belongsTo('User');
  }

  public static function store($data)
  {
    $validator = Validator::make($data, self::$rules);

    if ($validator->passes()) {
      $model = self::create($data);
      return $model;
    }

    return $validator->messages();
  }

  public static function find_and_update($id = null, $data)
  {
    $validator = Validator::make($data, self::$rules);

    if ($validator->passes()) {
      $model = self::find($id);
      $model->update($data);
      return $model;
    }

    return $validator->messages();
  }
}