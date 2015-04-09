<?php namespace Optima;

use Validator;

class Tracking extends \Eloquent {

  protected $fillable = [
    'quotation_id',
    'contact_id',
    'report',
    'register_date',
    'register_time',
  ];

  protected static $rules = [
    'report' => 'required',
  ];

  public function quotation() 
  {
    return $this->belongsTo('Optima\\Quotation');
  }

  public function contact()
  {
    return $this->belongsTo('Optima\\Contact');
  }

  public function todos()
  {
    return $this->hasMany('Todo');
  }

  public static function takeAndSkip($take = 10, $skip = 0)
  {
    return self::orderBy('id', 'DESC')
                ->take($take)->skip($skip)->get();
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

  public function with_contacts($id)
  {
    return self::find($id)->contacts;
  }
}