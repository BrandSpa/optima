<?php namespace Optima\Repositories\Product;

use Optima\Product;
use Optima\Repositories\Quotation\QuotationRepositoryInterface;
use Input;
use Response;
use DateTime;

class EloquentProductRepository implements ProductRepositoryInterface {

	protected $quotation;

	public function __construct(QuotationRepositoryInterface $quotation)
	{
		$this->quotation = $quotation;
	}

	public function all()
	{
		return Product::all();
	}

	public function paginate($num)
	{
		return Product::orderBy('id', 'desc')->paginate($num);
	}

	public function find($id)
	{
		return Response::json(Product::find($id));
	}

	public function store()
	{
		$product = new Product;

		$lapse = Input::get('lapse');
		$quantity = Input::get('quantity');
		$price = Input::get('price');
		$total =	$lapse*$quantity*$price;

		$product->total = $total;

		if($product->save()) return $product->toArray();


		return $product->errors();
	}

	public function update($id)
	{
		$product = Product::find($id);

		$lapse = Input::get('lapse');
		$quantity = Input::get('quantity');
		$price = Input::get('price');
		$total =	$lapse*$quantity*$price;
		$product->total = $total;
		if (!Input::has('iva')) $product->iva = 0;
		if (!Input::has('show')) $product->show = 0;

		if($product->save()) return $product;

		return $product->errors();
	}

	public function delete($id)
	{
		$product = Product::find($id);

		$product->delete();
	}

	public function findByQuotation($id)
	{
		$quotation = $this->quotation->find($id);
		if ($quotation) return $quotation->products()->get();
	}

	public function duplicate($id)
	{
		$oldproduct = Product::find($id);
		$product = $oldproduct->replicate();
		$product->created_at = new DateTime;
		$product->save();
		return $product;
	}

}