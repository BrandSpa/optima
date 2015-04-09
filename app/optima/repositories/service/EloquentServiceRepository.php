<?php namespace Optima\Repositories\Service;

use Optima\Service;
use Optima\Repositories\Quotation\QuotationRepositoryInterface;
use Input;
use Request;

class EloquentServiceRepository implements ServiceRepositoryInterface {

	public function __construct(QuotationRepositoryInterface $quotation)
	{
		$this->quotation = $quotation;
	}

	public function all()
	{
		return Service::all()->toArray();
	}

	public function paginate($num)
	{
		return Service::orderBy('id', 'desc')->paginate($num);
	}

	public function find($id)
	{
		return Service::find($id);
	}

	public function store()
	{
		$service = new Service;

		if ($service->save()) {
			return $service;
		}

		return $service->errors();
	}

	public function update($id)
	{
		$service = Service::find($id);
		$service->title = Request::get('title');
		$service->text = Request::get('text');
		$service->price_1 = Request::get('price_1');
		$service->price_2 = Request::get('price_2');
		if ($service->save()) return $service;

		return $service->errors();
	}

	public function delete($id)
	{
		$service = Service::find($id);
		$service->delete();
	}

	public function findByTitle()
	{
		return Service::where('title', $title)->first();
	}

	public function UpdatePrices($id)
	{
		$service = Service::find($id);
		$service->price_1 = Input::get('price_1');
		$service->price_2 = Input::get('price_2');
		if($service->save()) return $service;
		return $service->errors();
	}

	public function attachToQuotation($service_id, $quotation_id)
	{
		$quotation = $this->quotation->find($quotation_id);
		$quotation->services()->attach($service_id);
	}

	public function detachToQuotation($service_id, $quotation_id)
	{
		$quotation = $this->quotation->find($quotation_id);
		$quotation->services()->detach($service_id);
	}

	public function findByQuotation($id)
	{
		$quotation = $this->quotation->find($id);
		if ($quotation) return $quotation->services()->get();
	}
}