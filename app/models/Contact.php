<?php namespace Optima;

use Validator;

class Contact extends \Eloquent {

	protected $fillable = [
		'company_id',
		'name',
		'lastname',
		'gender',
		'title',
		'position',
		'email', 
		'phone_1',
		'phone_2',
		'mobile_1',
		'mobile_2',
		'fax',
		'pay_method',
		'found_us',
		'who_call',
		'comment',
		'birthday'
	];

	public $rules = [
		'name' => 'required', 
		'email' => 'required|email'
	];

	public function company() 
	{
		return $this->belongsTo('Optima\\Company');
	}
	
	public function quotations() 
	{
		return $this->hasMany('Optima\\Quotation');
	}

	public static function takeAndSkip($take = 10, $skip = 0)
	{
		return self::with('company')
								->orderBy('id', 'DESC')
								->take($take)->skip($skip)->get();
	}


	public static function search($query)
	{
			return self::where("name", "LIKE", "%$query%")
				->orWhere("lastname", "LIKE", "%$query%")
				->orWhere("email", "LIKE", "%$query%")
				->orWhere("mobile_1", "LIKE", "%$query%")->take(5)->get();
	}

}