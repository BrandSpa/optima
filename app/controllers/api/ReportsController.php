<?php namespace Api;

use Optima\Quotation;
use Response;
use DB;
use Carbon\Carbon;
use Input;

class ReportsController extends \BaseController {
	use \Traits\Reports\ByStatus;
	use \Traits\Reports\byStatusCount;
	use \Traits\Reports\findUs;
	use \Traits\Reports\findUsCount;
	use \Traits\Reports\clientType;
	use \Traits\Reports\byAdvisor;
	use \Traits\Reports\byNoEffective;
	use \Traits\Reports\byNoEffectiveCount;
	use \Traits\Reports\diffSentTotal;
	use \Traits\Reports\total;
	use \Traits\Reports\totalMoney;
	

	public function index()
	{
		$now = Carbon::now();
		$date_start = Input::get('date_start') ? Input::get('date_start') : $now->year."-".$now->month."-1";
		$date_end = Input::get('date_end') ? Input::get('date_end') : $now->year."-".$now->month."-31";

		$type = Input::get('type') ? Input::get('type') : "%";
		$client_type = Input::get('client_type') ? Input::get('client_type') : '%';

		$byStatus = $this->allByStatus(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$byStatusCount = $this->countAllByStatus(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$byFindUs = $this->allByFindUs(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$byFindUsCount = $this->allByFindUsCount(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$byAdvisor  = $this->allByAdvisors(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$byClientType = $this->allByClientType(
			$type, 
			$date_start, 
			$date_end
		);

		$byNoEffective = $this->allByNoEffective(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$byNoEffectiveCount = $this->allByNoEffectiveCount(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$TotalQuotations = $this->getTotalQuotations(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$TotalQuotationsMoney = $this->TotalQuotationsMoney(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		$averageSentTime = $this->averageSentTime(
			$date_start, 
			$date_end, 
			$type, 
			$client_type
		);

		$averageConfirmedTime = $this->averageConfirmedTime(
			$date_start, 
			$date_end, 
			$type, 
			$client_type
		);

		$byDiff = $this->allByDiff(
			$type, 
			$client_type, 
			$date_start, 
			$date_end
		);

		return Response::json([
			"status"                 => $byStatus,
			"statusCount"            => $byStatusCount,
			"findUS"                 => $byFindUs,
			"findUSCount"            => $byFindUsCount,
			"advisors"               => $byAdvisor,
			"client_type"            => $byClientType,
			"no_effective"           => $byNoEffective,
			"no_effective_count"     => $byNoEffectiveCount,
			'total_quotations'       => $TotalQuotations,
			'sent_diff'              => $byDiff,
			'average_sent'           => $averageSentTime,
			'average_confirmed'      => $averageConfirmedTime,
			'total_quotations_money' => $TotalQuotationsMoney,
			'now'                    => $now,
			'type'        => $type,
			'date_start'  => $date_start,
			'date_end'    => $date_end
		]);
	}

	public function averageSentTime($date_start, $date_end, $type, $client_type)
	{
		$r = Quotation::whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
			->avg('created_sent_diff');

		return round($r);
	}

	public function averageConfirmedTime($date_start, $date_end)
	{
		$r = Quotation::whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
			->avg('sent_confirmed_diff');

		return round($r);
	}

}
