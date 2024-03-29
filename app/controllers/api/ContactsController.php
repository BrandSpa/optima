<?php namespace Api;

use Illuminate\Support\Facades\DB;
use Response;
use Session;
use Optima\Contact;
use Optima\Quotation;
use Optima\Solicitudes;
use Input;

class ContactsController extends \BaseController {

	protected $entity;

	public function __construct(Contact $model)
	{
		$this->entity = $model;
	}

	public function index()
	{
		$company = Input::get('company_id');
		$quotation = Input::get('quotation_id');
		$solicitud = Input::get('solicitudes_id');
		$q = Input::get('query');
		$offset = Input::get('offset');

		$collection = new Contact;

		if (Input::has('query')) {
			$collection = $collection->where(function($query) use($q) {
				$query
				->where('name', 'like', "%$q%")
				->orWhereHas('company', function($subquery) use($q){
						$subquery->where('name', 'like', "%$q%");
					});
			});
		}

		if (Input::has('company_id')) {
			$collection = Contact::where('company_id', $company)->get();
			foreach ($collection as $contact) {
			    $blacklisted = DB::table('quotations')->where('client_type', 'Blacklist')->where('contact_id', $contact->id)->first();
			    $blacklistedSolicitudes = DB::table('solicitudes')->where('client_type', 'Blacklist')->where('contact_id', $contact->id)->first();
			    $blacklistedCompany =  DB::table('companies')->where('client_type', 'Blacklist')->where('id', $company)->first();

			    if($blacklisted || $blacklistedSolicitudes || $blacklistedCompany) {
			        $contact->blacklist = true;
			        continue;
                }
                $contact->blacklist = false;
            }
			return Response::json($collection, 200);
		}

		if (Input::has('quotation_id')) {
			$collection = Quotation::find($quotation)->company->contacts()->get();
			return Response::json($collection, 200);
		}

		if (Input::has('solicitudes_id')) {
			$collection = Solicitudes::find($solicitud)->company->contacts()->get();
			return Response::json($collection, 200);
		}

		$collection = $collection
		->with(['company'])
		->take(15)
		->skip($offset)
		->get();
		return Response::json($collection);
	}

	public function show($id)
	{
		$quotation_id = Input::get('quotation_id');

		if (Input::has('quotation_id')) {
			$model = Contact::find($id);
			$model->quotation()->where('quotation_id', $quotation_id)->get();
			return Response::json($model, 200);
		}

		$model = Contact::with(['company'])->find($id);
		return Response::json($model, 200);
	}

	public function search($query)
	{
		$collection = Contact::search($query);
		return Response::json($collection, 200);
	}

	public function destroy($id)
	{
		$model = Contact::find($id);
		$model->delete();
		return Response::json(['message' => 'deleted']);
	}

}
