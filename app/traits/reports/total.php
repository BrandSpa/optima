<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait total {

  public function getTotalQuotations($type, $client_type, $date_start, $date_end)
  {
    $collection = Quotation::whereNotIn('status', ['Replanteada'])
      ->where('quotations.type', 'like', $type)
      ->where('quotations.client_type', 'like', $client_type)
      ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
      ->count();
    return $collection;
  }
}