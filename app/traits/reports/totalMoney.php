<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait totalMoney {

  public function TotalQuotationsMoney($type, $client_type, $date_start, $date_end) {

    $collection = quotation::where('quotations.type', 'like', $type)
      ->where('quotations.client_type', 'like', $client_type)
      ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
      ->join('products', 'quotations.id', '=', 'products.quotation_id')
      ->select(DB::raw("SUM(total) AS products_total"))->get();

    return $collection[0]->products_total;
  }

}