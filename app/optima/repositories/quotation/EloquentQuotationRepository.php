<?php namespace Optima\Repositories\Quotation;

use Optima\Quotation;
use Optima\Company;
use DB;
use Carbon\Carbon;
use Pusherer;
use Auth;
use Request;
use Input;
use DateTime;

class EloquentQuotationRepository implements QuotationRepositoryInterface {

	public function all() 
	{
		return Quotation::all();
	}

	public function paginate($num) 
	{
		return Quotation::with(['company', 'contact'])->orderBy('id', 'desc')->paginate($num);
	}

	public function find($id) 
	{
		return Quotation::find($id);
	}

	public function store() 
	{
		$quotation = new Quotation;

		$quotation->save();

		return $quotation;
	}

	public function update($id) 
	{
		$quotation = Quotation::find($id);
		if (Input::get('comment')) {
			$quotation->comment = Input::get('comment');
		}

		if (Input::get('offer') || Input::get('recipient_1') || Input::get('recipient_2') || Input::get('message')) {
			$quotation->offer = Input::get('offer');
			$quotation->recipient_1 = Input::get('recipient_1');
			$quotation->recipient_2 = Input::get('recipient_2');
			$quotation->message = Input::get('message');
		}
	
		if( $quotation->save() ) return $quotation;

		return $quotation->errors();
	}

	public function create($user_id = null, $company_id, $contact_id) 
	{
		$quotation = new Quotation;
		$quotation->user_id = $user_id;
		$quotation->company_id = $company_id;
		$quotation->contact_id = $contact_id;
	}

	public function duplicate($id) 
	{
		$oldQuotation = Quotation::find($id);
		$quotation = $oldQuotation->replicate();
		$quotation->status = "Replanteada";
		$quotation->created_at = new DateTime;
		$quotation->save();

		$products = $oldQuotation->products;
		$services = $oldQuotation->services;

		if ($products) {
			foreach ($products as $oldProduct) {

				$product = $oldProduct->replicate();
				$product->quotation_id = $quotation->id;
				$product->save();
			}
		}

		if ($services) {
			foreach ($services as $service) {
				$quotation->services()->attach($service->id);	
			}
		}

		$message = Auth::user()->name ." creo la cotización ". $quotation->id;
 		Pusherer::trigger('optima-quotation', 'quotation-duplicate', array( 'message' => $message ));
 		
		return $quotation;
	}

	public function search($type, $query) 
	{
		if ($type == "quotation") {
			return $this->search_by_quotation($query);
		}

		if ($type == "contact") {
			return $this->search_by_contact($query);
		}

		if ($type == "company") {
			return $this->search_by_company($query);
		}
	}

	public function search_by_quotation($query)
	{
		$quotations = Quotation::with('company', 'contact')->where("id", "like", "$query%")->take(10)->get();
		return $quotations;
	}

	public function search_by_contact($q)
	{
		$quotations = Quotation::with(array('company', 'contact' => function($query) use($q)
		{
			$query->where('name', 'like', "%$q%");
		}))
		->whereHas('contact', function($query) use($q)
		{
			$query->where('name', 'like', "%$q%");
		})->orderBy('created_at', 'desc')->take(10)->get();

		return $quotations;
	}

		public function search_by_company($q)
	{
		$quotations = Quotation::with(array('contact', 'company' => function($query) use($q)
		{
			$query->where('name', 'like', "%$q%");
		}))
		->whereHas('company', function($query) use($q)
		{
			$query->where('name', 'like', "%$q%");
		})->orderBy('created_at', 'desc')->take(10)->get();

		return $quotations;
	}

	public function byUserAllCount($userId) 
	{
		return DB::table('quotations')->where('user_id', $userId)->count();
	}

}