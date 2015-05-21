<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait byStatusCount {
  
  /**
   * All by status
   *
   * @return array
   */
  public function countAllByStatus($type, $client_type, $date_start, $date_end)
  {

    $effective = $this->countTotalStatus(
      'Efectiva',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $draft = $this->countTotalStatus(
      'Borrador',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $sent = $this->countTotalStatus(
      'Enviada',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $not_effective = $this->countTotalStatus(
      'No efectiva',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    return [
    $draft,
    $sent,
    $effective,
    $not_effective
    ];
  }

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
}