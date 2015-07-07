<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait clientType {

  public function getTotalClientType($client_type, $type, $date_start, $date_end)
  {
    $collection = quotation::where('quotations.client_type', $client_type)
      ->where('quotations.type', 'like', $type)
      ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
      ->whereNotIn('status', ['Replanteada'])
      ->count();

    return $collection;
  }

  public function allByClientType($type, $date_start, $date_end)
  {

    $client_types = [
      'Activo',
      'Inactivo',
      'nuevo'
    ];

    $result = [];

    foreach ($client_types as $client_type) {
      $total = $this->getTotalClientType(
        $client_type,
        $type,
        $date_start,
        $date_end
      );

      array_push($result, $total);
    }

    return $result;
  }
}