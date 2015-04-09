<?php

use Optima\Repositories\Contact\ContactRepositoryInterface;
use Optima\Repositories\Company\CompanyRepositoryInterface;

class ContactsController extends BaseController {

	protected $layout = "layouts.master";
	protected $contact;
	protected $companies;

	public function __construct(ContactRepositoryInterface $contact, CompanyRepositoryInterface $company)
	{
		$this->contact= $contact;
		$this->company = $company;
	}
	
	public function index()
	{
		if (isset($_GET['sort'])) {
			$sort = $_GET['sort'];
		}
		else {
			$sort = "desc";
		}
		$contacts = $this->contact->paginate($sort, 10);
		$this->layout->content = View::make('contacts.index', compact('contacts'), compact('sort'));
	}

	public function show($id)
	{
		$contact = $this->contact->find($id);
		$this->layout->content = View::make('contacts.show', compact('contact')); 
	}

	public function create()
	{
		$company = $this->company->find(Session::get('company_id'));
		$this->layout->content = View::make('contacts.create', compact('company')); 
	}

	public function store()
	{
		$store = $this->contact->store();
		return Response::json($store);
	}

	public function edit($id)
	{
		$this->layout->content = View::make('contacts.edit'); 
	}

	public function update($id)
	{
		$contact = $this->contact->update($id);
		if (isset($contact->name)) {
			Loger::activity("Actualizo el contacto $contact->name de la empresa"." ". $contact->company->name);
		}
		return Response::json($contact);
	}

}