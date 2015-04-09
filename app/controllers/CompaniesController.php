<?php

use Optima\Repositories\Company\CompanyRepositoryInterface;

class CompaniesController extends BaseController {

	protected $layout = "layouts.master";
	protected $company;

	public function __construct(CompanyRepositoryInterface $company)
	{
		$this->company = $company;
	}

	public function index()
	{
		$this->layout->content = View::make('companies.index');
	}

	public function contacts()
	{
		$contacts = $this->company->getContacts(Session::get('quotation_id'));
		return Response::json($contacts);
	}

}