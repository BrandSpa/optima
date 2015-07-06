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
    $no_disponible = $this->getTotalNoEffectiveCount(
      "No disponible",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $no_confiable = $this->getTotalNoEffectiveCount(
      "No confiable",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $competencia = $this->getTotalNoEffectiveCount(
      "Competencia",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $por_cliente = $this->getTotalNoEffectiveCount(
      "Por cliente",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $sin_status = $this->getTotalNoEffectiveCount(
      '',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    return [
    $no_disponible,
    $no_confiable,
    $competencia,
    $por_cliente,
    $sin_status
    ];

  }
}