<?php namespace Optima\Repositories\Contact;

use Optima\Contact;
use Session;
use Auth;
use Event;

class EloquentContactRepository implements ContactRepositoryInterface {

	public function all() 
	{
		return Contact::all();
	}

	public function paginate($sort = 'desc', $num) 
	{
		return Contact::orderBy('id', $sort)->paginate($num);
	}

	public function find($id) 
	{
		return Contact::find($id);
	}

	public function store() 
	{
		$contact = new Contact;

		if($contact->save()) {
			Event::fire('contacts.store', [$contact->id]);
			return $contact;
		}

		return $contact->errors();
	}

	public function update($id) 
	{
		$contact = Contact::find($id);

		if ($contact->save()) return $contact;

		return $contact->errors();
	}

	public function search($query) 
	{
		return Contact::where("name", "LIKE", "%$query%")
			->orWhere("lastname", "LIKE", "%$query%")
			->orWhere("email", "LIKE", "%$query%")
			->orWhere("mobile_1", "LIKE", "%$query%")->take(5)->get();
	}

}