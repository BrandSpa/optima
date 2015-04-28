<?php namespace Api;

use Optima\Quotation;
use Response;
use DB;
use Carbon\Carbon;
use Input;

class ReportsController extends \BaseController {

	public function index()
	{
		$now = Carbon::now();
		$date_start = Input::get('date_start') ? Input::get('date_start') : $now->year."-".$now->month."-1";
		$date_end = Input::get('date_end') ? Input::get('date_end') : $now->year."-".$now->month."-31";
		$type = Input::get('type') ? Input::get('type') : '%';
		$client_type = Input::get('client_type') ? Input::get('client_type') : '%';

		$byStatus             = $this->allByStatus($type, $client_type, "$date_start", $date_end);
		$byFindUs             = $this->allByFindUs($type, $client_type, "$date_start", $date_end);
		$byAdvisor            = $this->allByAdvisors($type, $client_type, "$date_start", $date_end);
		$byClientType         = $this->allByClientType("$date_start", $date_end);
		$byNoEffective        = $this->allByNoEffective($type, $client_type, "$date_start", $date_end);
		$TotalQuotations      = $this->getTotalQuotations($type, $client_type, "$date_start", $date_end);
		$TotalQuotationsMoney = $this->TotalQuotationsMoney($type, $client_type, "$date_start", $date_end);
		$averageSentTime      = $this->averageSentTime("$date_start", $date_end, $type, $client_type);
		$averageConfirmedTime = $this->averageConfirmedTime();
		$byDiff               = $this->allByDiff($type, $client_type, "$date_start", $date_end);

		return Response::json([
			"status"                 => $byStatus,
			"findUS"                 => $byFindUs,
			"advisors"               => $byAdvisor,
			"client_type"            => $byClientType,
			"no_effective"           => $byNoEffective,
			'total_quotations'       => $TotalQuotations,
			'sent_diff'              => $byDiff,
			'average_sent'           => $averageSentTime,
			'average_confirmed'      => $averageConfirmedTime,
			'total_quotations_money' => $TotalQuotationsMoney,
			'now'                    => $now,
			'date_start'             => $date_start
		]);
	}

	public function getTotalQuotations($type, $client_type, $date_start, $date_end)
	{
		$collection = Quotation::whereNotIn('status', ['Replanteada'])
			->where('quotations.type', 'like', $type)
			->where('quotations.client_type', 'like', $client_type)
			->whereRaw('MONTH(created_at) = ? AND YEAR(created_at) = ?', [$date_start, $date_end])
			->count();
		return $collection;
	}

	public function averageSentTime($date_start, $date_end, $type, $client_type)
	{
		$r = Quotation::whereRaw('MONTH(created_at) = ? AND YEAR(created_at) = ?', [$date_start, $date_end])
			->where('type', 'like', $type)
			->where('client_type', 'like', $client_type)
			->select( DB::raw('round(avg(created_sent_diff)) as averageSent') )->get();

		return $r[0]->averageSent;
	}

	public function averageConfirmedTime()
	{
		return Quotation::avg('sent_confirmed_diff');
	}

	public function allByStatus($type, $client_type, $date_start, $date_end)
	{
		$effective = $this->getTotalStatus('Efectiva', $type, $client_type, $date_start, $date_end);
		$draft = $this->getTotalStatus('Borrador', $type, $client_type, $date_start, $date_end);
		$sent = $this->getTotalStatus('Enviada', $type, $client_type, $date_start, $date_end);
		$not_effective = $this->getTotalStatus('No efectiva', $type, $client_type, $date_start, $date_end);

		return [
			$draft,
			$sent,
			$effective,
			$not_effective
		];
	}

	public function allByFindUs($type, $client_type, $date_start, $date_end)
	{
		$advisors = $this->getTotalFoundUs('Asesores comerciales', $type, $client_type, $date_start, $date_end);
		$client = $this->getTotalFoundUs('Cliente', $type, $client_type, $date_start, $date_end);
		$web = $this->getTotalFoundUs('Página Web Avante', $type, $client_type, $date_start, $date_end);
		$adwords = $this->getTotalFoundUs('Google Adwords', $type, $client_type, $date_start, $date_end);
		$referred = $this->getTotalFoundUs('Referido', $type, $client_type, $date_start, $date_end);
		$promotion = $this->getTotalFoundUs('Promoción', $type, $client_type, $date_start, $date_end);
		$yellow_pages = $this->getTotalFoundUs('Paginas Amarilladas', $type, $client_type, $date_start, $date_end);
		$yellow_pages_web = $this->getTotalFoundUs('Paginas Amarilladas Web', $type, $client_type, $date_start, $date_end);
		$phone = $this->getTotalFoundUs('Teléfono', $type, $client_type, $date_start, $date_end);
		$social_network = $this->getTotalFoundUs('Redes Sociales', $type, $client_type, $date_start, $date_end);

		return [
			$advisors,
			$client,
			$web,
			$adwords,
			$referred,
			$promotion,
			$yellow_pages,
			$yellow_pages_web,
			$phone,
			$social_network
		];
	}

	public function allByNoEffective($type, $client_type, $date_start, $date_end)
	{
		$no_disponible = $this->getTotalNoEffective("No disponible", $type, $client_type, $date_start, $date_end);
		$no_confiable = $this->getTotalNoEffective("No confiable", $type, $client_type, $date_start, $date_end);
		$competencia = $this->getTotalNoEffective("Competencia", $type, $client_type, $date_start, $date_end);
		$por_cliente = $this->getTotalNoEffective("Por cliente", $type, $client_type, $date_start, $date_end);

		return [
			$no_disponible,
			$no_confiable,
			$competencia,
			$por_cliente
		];

	}

	public function allByAdvisors($type, $client_type, $date_start, $date_end)
	{
		$andres = $this->getTotalAdvisors('Andres Rojas', $type, $client_type, $date_start, $date_end);
		$diego = $this->getTotalAdvisors('Diego Rojas', $type, $client_type, $date_start, $date_end);

		return [$andres, $diego];
	}

	public function allByClientType($date_start, $date_end)
	{
		$active = $this->getTotalClientType('Activo', $date_start, $date_end);
		$inactive = $this->getTotalClientType('Inactivo', $date_start, $date_end);
		$new = $this->getTotalClientType('nuevo', $date_start, $date_end);

		return [
			$active,
			$inactive,
			$new
		];
	}

	public function allByDiff($type, $client_type, $date_start, $date_end){
		$stock = $this->diff_sent_total("<= 30", "Inventario", $type, $client_type, $date_start, $date_end);
		$order = $this->diff_sent_total("<= 120", "Pedido", $type, $client_type, $date_start, $date_end);
		$outStock = $this->diff_sent_total("> 30", "Inventario", $type, $client_type, $date_start, $date_end);
		$outOrder = $this->diff_sent_total("> 120", "Pedido", $type, $client_type, $date_start, $date_end);

		return [
			$stock,
			$outStock,
			$order,
			$outOrder
		];

	}

	public function getTotalStatus($status, $type, $client_type, $date_start, $date_end)
	{
		$collection = quotation::where('quotations.status', '=', $status)
			->where('quotations.type', 'like', $type)
			->where('quotations.client_type', 'like', $client_type)
			->whereBetween('quotations.created_at', ["$date_start", "$date_end"])
			->join('products', 'quotations.id', '=', 'products.quotation_id')
			->where('products.ordered', '=', true)
			->select(DB::raw("SUM(total) AS products_total"))->get();

		return $collection[0]->products_total;
	}

	public function getTotalNoEffective($cause, $type, $client_type, $date_start, $date_end)
	{
		$collection = quotation::where('quotations.status', '=', 'No efectiva')
			->where('quotations.status_cause', '=', $cause)
			->where('quotations.type', 'like', $type)
			->where('quotations.client_type', 'like', $client_type)
			->whereBetween('quotations.created_at', [$date_start, $date_end])
			->join('products', 'quotations.id', '=', 'products.quotation_id')
			->where('products.ordered', '=', true)
			->select(DB::raw("SUM(total) AS products_total"))->get();

		return $collection[0]->products_total;
	}

	public function getTotalFoundUs($found_us, $type, $client_type, $date_start, $date_end)
	{
		$collection = quotation::where('quotations.found_us', $found_us)
			->whereBetween('quotations.created_at', [$date_start, $date_end])
			->where('quotations.type', 'like', $type)
			->where('quotations.client_type', 'like', $client_type)
			->whereNotIn('status', ['Replanteada'])
			->join('products', 'quotations.id', '=', 'products.quotation_id')
			->where('products.ordered', '=', true)
			->select(DB::raw("SUM(total) AS products_total"))->get();

		return $collection[0]->products_total;
	}

	public function getTotalAdvisors($advisor, $type, $client_type, $date_start, $date_end)
	{
		$collection = quotation::where('quotations.advisor', $advisor)
			->whereBetween('quotations.created_at', [$date_start, $date_end])
			->where('quotations.type', 'like', $type)
			->where('quotations.client_type', 'like', $client_type)
			->whereNotIn('status', ['Replanteada'])
			->count();

		return $collection;
	}

	public function getTotalClientType($client_type, $date_start, $date_end)
	{
		$collection = quotation::where('quotations.client_type', $client_type)
			->whereBetween('quotations.created_at', [$date_start, $date_end])
			->whereNotIn('status', ['Replanteada'])
			->count();

		return $collection;
	}

	public function TotalQuotationsMoney($type, $client_type, $date_start, $date_end){
		$collection = quotation::where('quotations.status', '=', 'Efectiva')
			->where('quotations.type', 'like', $type)
			->where('quotations.client_type', 'like', $client_type)
			->whereBetween('quotations.created_at', [$date_start, $date_end])
			->join('products', 'quotations.id', '=', 'products.quotation_id')
			->where('products.ordered', '=', true)
			->select(DB::raw("SUM(total) AS products_total"))->get();

		return $collection[0]->products_total;
	}

	public function diff_sent_total($comparison, $type_category, $type, $client_type, $date_start, $date_end)
	{
		$collection = quotation::where('quotations.status', '=', 'Efectiva')
			->where('quotations.type', 'like', $type)
			->where('quotations.client_type', 'like', $client_type)
			->where('type_category', '=', $type_category)
			->whereBetween('quotations.created_at', [$date_start, $date_end])
			->whereRaw("created_sent_diff ". $comparison)->count();

		return $collection;
	}

}
