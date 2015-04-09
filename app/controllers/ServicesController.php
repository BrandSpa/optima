<?php

use Optima\Repositories\Service\ServiceRepositoryInterface;

class ServicesController extends BaseController {

	protected $layout = "layouts.master";
	protected $service;

	public function __construct(ServiceRepositoryInterface $service)
	{
		$this->service = $service;
	}

	public function index()
	{
	$services = $this->service->paginate(10);
		$this->layout->content = View::make('services.index')->with('services', $services);
	}

	public function allByQuotation()
	{
		return Response::json($this->service->byQuotation());
	}

	public function show($id)
	{
		return $this->service->find($id);
	}

	public function create()
	{
		$this->layout->content = View::make('services.create');
	}

	public function store()
	{
		$service = $this->service->store();
		return Response::json($service);
	}

	public function update($id)
	{
		$service = $this->service->update($id);
		return Response::json($service);
	}

	public function updatePrices($id)
	{
		$service = $this->service->updatePrices($id);
		return Response::json($service);
	}

	public function destroy($id)
	{
		$service = $this->service->delete($id);
	}

	public function attach($id)
	{
		$this->service->attachToQuotation($id, Session::get('quotation_id'));
		return $this->service->find($id);
	}

	public function detach($id)
	{
		Service::detachToQuotation($id, Session::get('quotation_id'));
	}

}