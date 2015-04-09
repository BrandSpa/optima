<?php

use Optima\Repositories\Product\ProductRepositoryInterface;
use Optima\Repositories\Service\ServiceRepositoryInterface;

class ProductsController extends BaseController {
	protected $layout = "layouts.master";
	protected $product;
	protected $service;

	public function __construct(ProductRepositoryInterface $product ,ServiceRepositoryInterface $service)
	{
		$this->product = $product;
		$this->service = $service;
	}

	public function index()
	{
		$products = $this->product->all();
		$this->layout->content = View::make('products.index', compact('products'));
	}

	public function show($id)
	{
		$product = $this->product->find($id);
		$this->layout->content = View::make('products.show', compact('product'));
	}

	public function create()
	{
		$quotation_id = Session::get('quotation_id');
		$products = $this->product->findByQuotation($quotation_id);
		$services = $this->service->findByQuotation($quotation_id);

		$this->layout->content = View::make('products.create', compact('products'), compact('services'));
	}

	public function store()
	{
		$product = $this->product->store();
		
		return Response::json($product, 200);
	}

	public function edit($id)
	{
		$product = $this->product->find($id);
		$this->layout->content = View::make('products.edit', compact('product'));
	}

	public function update($id)
	{
		$product = $this->product->update($id);
		return Response::json($product);
	}

	public function destroy($id)
	{
		$product = $this->product->delete($id);
	}

	public function duplicate($id_quotation, $id_product)
	{
		$product = $this->product->duplicate($id_product);
		return Response::json($product, 200);
	}

}