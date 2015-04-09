<?php namespace Optima;

use Validator;
use DateTime;

class Product extends \Eloquent {
	
	protected $fillable = [
		'quotation_id',
		'name',
		'type',
		'processor',
		'ram',
		'hdd',
		'burner',
		'network_card',
		'battery',
		'monitor',
		'keyboard',
		'os',
		'office',
		'antivirus',
		'additional_1',
		'additional_2',
		'additional_3',
		'additional_4',
		'additional_5',
		'additional_6',
		'lapse',
		'period',
		'quantity',
		'price',
		'total',
		'show',
		'iva',
		'note',
		'spaces',
		'ordered',
		'position'
	];

	public static $rules = [
		'name' => 'required',
		'lapse' => 'required',
		'period' => 'required',
		'quantity' => 'required',
		'price' => 'required'
	];
	
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

	public static function duplicate($id)
	{
		$oldproduct = Product::find($id);
		$product = $oldproduct->replicate();
		$product->created_at = new DateTime;
		$product->save();
		return $product;
	}

}