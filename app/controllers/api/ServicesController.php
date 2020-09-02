<?php namespace Api;

use Optima\Repositories\Service\ServiceRepositoryInterface;
use Optima\Service;
use Optima\Quotation;
use Optima\Solicitudes;
use Response;
use Input;
use DB;
use Validator;
class ServicesController extends \BaseController {

	public function __construct(Service $model)
	{
		$this->entity = $model;
	}

	public function index()
	{
		$offset = Input::get('offset');

		if (Input::has('quotation_id')) {
			$quotation_id = Input::get('quotation_id');
			$quotation = Quotation::find($quotation_id);
			$collection = $quotation->services()->get();
			return Response::json($collection, 200);
		}

		if (Input::has('solicitud_id')) {
			$solicitud_id = Input::get('solicitud_id');
			$solicitud = Solicitudes::find($solicitud_id);
			$collection = $solicitud->services()->get();
			return Response::json($collection, 200);
		}

		if (Input::has('query')) {
			$query = Input::get('query');
			$collection = Service::search($query);
			return Response::json($collection, 200);
		}

		$collection = Service::take(25)
			->skip($offset)
			->orderBy('id', 'DESC')
			->get();
		return Response::json($collection, 200);
	}

	public function allByQuotation()
	{
		$collection = $this->service->byQuotation();
		return Response::json($collection, 200);
	}

	public function show($id)
	{
	 	$model = Service::find($id);
	 	return Response::json($model, 200);
	}

	public function store()
	{
		if (Input::has('quotation_id')) {
			$quotation_id = Input::get('quotation_id');
			$service_id = Input::get('service_id');
			$model = Service::attachToQuotation($service_id, $quotation_id);
			return Response::json($model, 200);
		}

		$data = Input::all();


		$validator = Validator::make($data, $this->entity->rules);

		if($validator->passes()) {
			$model = Service::create($data);
			return Response::json($model, 200);
		}

		return Response::json($validator->errors()->all(), 400);

	}

	public function update($id)
	{
		$data = Input::all();
		$model = Service::findAndUpdate($id, $data);

		if (isset($model->id)) {
			return Response::json($model, 200);
		}
		return Response::json($model, 400);
	}

	public function updatePrices($id)
	{
		$service = $this->service->updatePrices($id);
		return Response::json($service);
	}

	public function destroy($id)
	{
		if (Input::has('quotation_id')) {
			$quotation_id = Input::get('quotation_id');
			$model = Service::detachToQuotation($id, $quotation_id);
			$service = Service::find($id);
			return Response::json($service, 200);
		}

		// $model = Service::findAndDestroy($id);
		return Response::json($model, 400);
	}
}
