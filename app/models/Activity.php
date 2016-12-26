<?php

class Activity extends \Eloquent {
	protected $fillable = ['user_id', 'quotation_id', 'message'];

  public function quotation()
  {
    return $this->belongsTo('Optima\\Quotation');
  }

  public function user()
  {
    return $this->belongsTo('User');
  }

  public static function boot()
  {
    parent::boot();

    static::creating(function($model)
    {
      $model->user_id = Auth::user()->id;
    });
  }
}