<?php namespace Optima;
use Response;
use DB;
use Validator;

class Service extends \Eloquent {

	protected $fillable = ['title', 'text', 'price_1', 'price_2'];

	public function quotations()
	{
		return $this->belongsToMany('Optima\\Quotation','quotation_service');
	}

	protected $guarded = [];

	public $rules = [
		'title' => 'required',
		'text' => 'required'
	];

	public static function takeAndSkip($take = 10, $skip = 0)
	{
		return self::orderBy('id', 'DESC')
								->take($take)->skip($skip)->get();
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
		 $collection = self::where("title", "LIKE", "%$query%")->take(25)->get();
		 return $collection;
	}

	public static function attachToQuotation($id, $quotation_id)
	{
		$check = DB::table('quotation_service')
						->where('quotation_id', $quotation_id)
						->where('service_id', $id)
						->first();

		$model = self::find($id);

		if ( count($check) <= 0 ) {
			$model->quotations()->attach($quotation_id);
			return $model;
		}

		return $model;
	}

	public static function detachToQuotation($id, $quotation_id)
	{
			$model = DB::table('quotation_service')
			->where('quotation_id', $quotation_id)
			->where('service_id', $id)
			->delete();

			return $model;
	}

	public static function findAndDestroy($id)
	{
		$model = self::find($id);
		$model->delete();
	}
}
