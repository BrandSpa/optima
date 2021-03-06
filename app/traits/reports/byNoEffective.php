<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait byNoEffective {

  /**
   * get total products by No effective
   * @return int
   */
  public function getTotalNoEffective(
    $cause,
    $type,
    $client_type,
    $date_start,
    $date_end
    ) {
    $collection = quotation::where('quotations.status',  'No efectiva')
    ->where('quotations.status_cause', '=', $cause)
    ->where('quotations.type', 'like', $type)
    ->where('quotations.client_type', 'like', $client_type)
    ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
    ->join('products', 'quotations.id', '=', 'products.quotation_id')
    ->select(DB::raw("SUM(total) AS products_total"))
    ->get();

    return $collection[0]->products_total;
  }

  public function allByNoEffective($type, $client_type, $date_start, $date_end)
  {
    $causes = [
      "No disponible",
      "No confiable",
      "Competencia",
      "Por cliente",
      ""
    ];

    $result = [];

    foreach ($causes as $cause) {
      $total = $this->getTotalNoEffective(
      $cause,
      $type,
      $client_type,
      $date_start,
      $date_end
      );
      if (is_null($total)) {
        $total = 0;
      }
      array_push($result, $total);
    }

    return $result;
  }
}