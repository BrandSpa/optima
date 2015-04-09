<?php namespace Optima\Repositories\Quotation;

interface QuotationRepositoryInterface {
	
	public function all();

	public function paginate($num);

	public function find($id);
	
	public function store();
	
}
