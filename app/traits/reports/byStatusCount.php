<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait byStatusCount {

	 /**
   * get total products by status
   * @return int
   */
  public function countTotalStatus(
    $status,
    $type,
    $client_type,
    $date_start,
    $date_end
    ) {

    $collection =  Quotation::where('quotations.status', $status)
    ->where('quotations.type', 'LIKE', $type)
    ->where('quotations.client_type', 'LIKE', $client_type)
    ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
    ->count();

    return $collection;
  }

  /**
   * All by status
   *
   * @return array
   */
  public function countAllByStatus($type, $client_type, $date_start, $date_end)
  {
    $status = [
      'Borrador',
      'Enviada',
      'Entregada',
      'Seguimiento',
      'Efectiva',
      'No efectiva',
      'No enviada',
      'Replanteada',
    ];

    $result = [];

    foreach ($status as $state) {
      $total = $this->countTotalStatus(
        $state,
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