<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait byNoEffectiveCount {

  /**
   * get total products by No effective
   * @return int
   */
  public function getTotalNoEffectiveCount(
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
    ->count();

    return $collection;
  }

  public function allByNoEffectiveCount($type, $client_type, $date_start, $date_end)
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
      $total = $this->getTotalNoEffectiveCount(
        $cause,
        $type,
        $client_type,
        $date_start,
        $date_end
      );

      array_push($result, $total);
    }

    return $result;
  }
}