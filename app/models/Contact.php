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
		'comment'
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

	public static function store($data)
	{
		$validator = Validator::make($data, self::$rules);

		if ($validator->passes()) {
			$model = self::create($data);
			return $model;
		}

		return $validator->messages();
	}

	public static function findAndUpdate($id = null, $data)
	{
		$validator = Validator::make($data, self::$rules);

		if ($validator->passes()) {
			$model = self::find($id);
			$model->update($data);
			return $model;
		}

		return $validator->messages();
	}

	public static function search($query)
	{
			return self::where("name", "LIKE", "%$query%")
				->orWhere("lastname", "LIKE", "%$query%")
				->orWhere("email", "LIKE", "%$query%")
				->orWhere("mobile_1", "LIKE", "%$query%")->take(5)->get();
	}

}