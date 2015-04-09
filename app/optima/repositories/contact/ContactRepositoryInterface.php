<?php namespace Optima\Repositories\Contact;

interface ContactRepositoryInterface {
	
	public function all();

	public function paginate($sort, $num);

	public function find($id);

	public function store();
	
}
