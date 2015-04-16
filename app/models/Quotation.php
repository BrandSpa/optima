<?php namespace Optima;

use DateTime;
use Auth;

class Quotation extends \Eloquent {

	protected $fillable = [
		'user_id',
		'company_id', 
		'contact_id',
		'created_sent_diff',
		'sent_confirmed_diff',
		'rethink_from',
		'type',
		'type_category',
		'advisor',
		'comment',
		'offer',
		'found_us', 
		'client_type', 
		'status',
		'status_cause',
		'status_note',
		'mail_message',
		'mail_recipient_1',
		'mail_recipient_2',
		'sent_at',
		'sent_in',
		'ordered',
		'service_approval'
	];

	public $rules = [
	
	];

	public function company()
	{
		return $this->belongsTo('Optima\\Company');
	}

	public function contact()
	{
		return $this->belongsTo('Optima\\Contact');
	}

	public function user()
	{
		return $this->belongsTo('Optima\\User');
	}

	public function products()
	{
		return $this->hasMany('Optima\\Product')->orderBy('position', 'asc');
	}

	public function trackings()
	{
		return $this->hasMany('Optima\\Tracking');
	}

	public function services()
	{
		return $this->belongsToMany('Optima\\Service','quotation_service');
	}

	public function activities()
	{
		return $this->hasMany('Activity');
	}

	public static function boot()
	{
		parent::boot();

		static::creating(function($model)
		{
			$model->user_id = Auth::user()->id;
		});
	}

	public static function takeAndSkip($take = 10, $skip = 0)
	{
		return self::with(['company', 'contact', 'user'])
								->orderBy('id', 'DESC')
								->take($take)->skip($skip)->get();
	}

	public static function store($data)
	{
		$model = self::create($data);
		return $model;
	}

	public static function findAndUpdate($id, $data)
	{
		$model = Quotation::find($id);
		$model->update($data);
		return $model;
	}

	public static function duplicate($id, $type)
	{
		$model = self::find($id);
		$modelNew = $model->replicate();
		$modelNew->created_at = new DateTime;
		$modelNew->status = 'Borrador';
		$modelNew->sent_at = null;
		$modelNew->created_sent_diff = null;
		$modelNew->save();

		$products = $model->products;
		$services = $model->services;
		$trackings = $model->trackings;
		$activities = $model->activities;

		self::duplicateAssociated($products, $modelNew);
		
		self::duplicateServices($services, $modelNew);
		if (isset($type) && $type == "rethink") {
			self::duplicateAssociated($trackings, $modelNew);
			self::duplicateAssociated($activities, $modelNew);
		}

		return $modelNew;
	}


	public static function duplicateAssociated($collection, $quotation)
	{
		if ($collection) {
			foreach ($collection as $oldModel) {
				$model = $oldModel->replicate();
				$model->quotation_id = $quotation->id;
				$model->save();
			}
		}
	}

	public static function duplicateServices($services, $quotation)
	{
		if ($services) {
			foreach ($services as $service) {
				$quotation->services()->attach($service->id);	
			}
		}
	}

	public static function sentAt($id)
	{
		$quotation = self::find($id);
		if ($quotation->created_sent_diff < 1) {
			$quotation->sent_at = new DateTime;
			$quotation->save();
		}
		return $quotation;
	}

	public static function diffCreateAndSent($id)
	{
		$quotation = self::find($id);
		if ($quotation->created_sent_diff < 1) {
			$created_at = new DateTime($quotation->created_at);
			$sent_at = new DateTime($quotation->sent_at);
			$diff = $created_at->diff($sent_at);
			$hours = $diff->h + ($diff->days*24);
			$minutes =  $diff->i + ($hours*60);
			$quotation->created_sent_diff = $minutes;
			$quotation->save();
		}
		return $quotation;
	}

	public function attachService($id, $service_id)
	{
		$quotation = self::find($id);
		$service = $quotation->services()->where('service_id', $service_id)->get();
		if (!$service) {
			$quotation->services()->attach($service_id);
		}
	}

	public static function search($query) 
	{
		$byQuotation = self::search_by_quotation($query);

		if (!$byQuotation->isEmpty()) {
			return $byQuotation;
		}

		$byContact = self::search_by_contact($query);
		if (!$byContact->isEmpty()) {
			return $byContact;
		}
		
		$byCompany = self::search_by_company($query);
		if (!$byCompany->isEmpty()) {
			return $byCompany;
		}
	}

	public static function search_by_quotation($query)
	{
		$quotations = Quotation::with('company', 'contact')->where("id", "like", "$query%")->orderBy('id', 'DESC')->take(50)->get();
		return $quotations;
	}

	public static function search_by_contact($q)
	{
		$quotations = Quotation::with(array('company', 'contact' => function($query) use($q) {
			$query->where('name', 'like', "%$q%");
		}))
		->whereHas('contact', function($query) use($q) {
			$query->where('name', 'like', "%$q%");
		})
		->orderBy('id', 'DESC')->take(50)->get();

		return $quotations;
	}

	public static function search_by_company($q)
	{
		$collection = Quotation::with(array('contact', 'company' => function($query) use($q)
		{
			$query->where('name', 'like', "%$q%");
		}))
		->whereHas('company', function($query) use($q) {
			$query->where('name', 'like', "%$q%");
		})
		->take(50)->orderBy('id', 'DESC')->get();

		return $collection;
	}

	public static function rethinked($id)
	{
		$model = self::find($id);
		self::cleanSent($id);
		self::cleanNoEffective($id);
		return $model;
	}

	public static function cleanSent($id)
	{
		$model = self::find($id);
		$model->sent_at = '';
		$model->diff_hours_created_sent = '';
		$model->diff_minutes_created_sent = '';
		$model->save();
	}

	public static function cleanNoEffective($id)
	{
		$model = self::find($id);
		$model->no_effective = '';
		$model->no_effective_note = '';
		$model->save();
	}

	public function scopeStatus($query, $status)
	{
		return $query->where('status', $status);
	}

	public function scopeAdvisor($query, $advisor)
	{
		return $query->where('advisor', $advisor);
	}

	public function scopeClientType($query, $client_type)
	{
		return $query->where('client_type', $client_type);
	}
	
	public static function filterBy($status, $advisor, $client_type)
	{
		return self::orWhere('status', $status)->orWhere('advisor', $advisor)->orWhere('client_type', $client_type)->get();
	}

}