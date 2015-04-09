<?php

class Todo extends \Eloquent {

	protected $fillable = [
    'user_id',
    'tracking_id',
    'from_user',
    'title',
    'description',
    'expires_date',
    'expires_time',
    'completed',
  ];

  protected static $rules = ['description' => 'required'];

  public function user()
  {
    return $this->belongsTo('Optima\\User');
  }

  public function assigned()
  {
    return $this->belongsTo('Optima\\User', 'from_user');
  }

  public function tracking()
  {
    return $this->belongsTo('Optima\\Tracking');
  }

  public static function store($data)
  {
    $validator = Validator::make($data, self::$rules);

    $data['from_user'] = Auth::user()->id;
    
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