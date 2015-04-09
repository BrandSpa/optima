<?php namespace Optima\Repositories\Service;

interface ServiceRepositoryInterface {
	
	public function all();
	public function paginate($num);
	public function find($id);
	public function store();
	public function update($id);
	public function delete($id);
}
