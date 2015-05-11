<?php namespace Api;

use Response;
use Session;
use Input;
use Optima\Quotation;
use Optima\Product;

class ProductsController extends \BaseController {

	public function index()
	{
		if (Input::has('quotation_id')) {
			$id = Input::get('quotation_id');
			$collection = Product::where('quotation_id', $id)
									->orderBy('position', 'asc')->get();
			return Response::json($collection, 200);
		}

		return Response::json("not quotation_id", 400);
	}

	public function show($id)
	{
		$model = Product::find($id);
		return Response::json($model, 200);
	}

	public function store()
	{
		$data = Input::all();
		$model = Product::store($data);
		if (isset($model->id)) {
			return Response::json($model, 200);
		}
		return Response::json($model, 400);
	}

	public function update($id)
	{
		$data = Input::all();
		$model = Product::findAndUpdate($id, $data);
		return Response::json($model, 200);
	}

	public function destroy($id)
	{
		$model = Product::find($id);
		$model->delete();
	}

	public function duplicate($id)
	{
		$model = Product::duplicate($id);
		return Response::json($model, 200);
	}

}