<?php namespace Api;

use Input;
use Activity;
use Response;

class ActivitiesController extends \BaseController {

	public function index()
	{
		if (Input::has('quotation_id')) {
			$quotation_id = Input::get('quotation_id');
			$collection = Activity::with('user')->where('quotation_id', $quotation_id)->orderBy('created_at', 'desc')->get();
			return Response::json($collection, 200);
		}

		$collection = Activity::with('user')->take(10)->orderBy('id', 'DESC')->get();
		return Response::json($collection, 200);
	}

	public function store()
	{
		$data = Input::all();
		$model = Activity::create($data);
		return Response::json($model, 200);
	}

}