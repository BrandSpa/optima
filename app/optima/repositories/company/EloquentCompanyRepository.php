<?php namespace Optima\Repositories\Company;

use Optima\Repositories\Quotation\QuotationRepositoryInterface;
use Optima\Company;
use Session;
use Input;

class EloquentCompanyRepository implements CompanyRepositoryInterface  {

	protected $quotation;

	public function __construct(QuotationRepositoryInterface $quotation)
	{
		$this->quotation = $quotation;
	}

	public function all($take, $skip = 0)
	{
		return Company::with('contacts')->orderBy('id', 'DESC')->take($take)->skip($skip)->get();
	}

	public function paginate($sort = 'desc', $num = '5')
	{
		return Company::orderBy('id', $sort)->paginate($num);
	}

	public function find($id)
	{
		return Company::find($id);
	}

	public function update($id)
	{
		$company = Company::find($id);

		if ($company->save()) return $company;

		return $company->errors();
	}

	public function search($query)
	{
		return Company::where("name", "LIKE", "%$query%")
		->orWhere("nit", "LIKE", "$query%")
		->take(5)->get();
	}

	public function getMails($id)
	{
		return Company::find($id)->contacts;
	}

	public function getContacts($quotation_id)
	{
		if ($quotation_id) {
			return $this->quotation->find($quotation_id)->company->contacts()->get();
		}
	}

}