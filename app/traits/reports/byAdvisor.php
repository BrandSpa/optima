<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait byAdvisor {

  public function getTotalAdvisors($advisor, $type, $client_type, $date_start, $date_end)
  {
    $collection = quotation::where('quotations.advisor', $advisor)
    ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
      ->where('quotations.type', 'like', $type)
      ->where('quotations.client_type', 'like', $client_type)
      ->whereNotIn('status', ['Replanteada'])
      ->count();

    return $collection;
  }

  public function allByAdvisors($type, $client_type, $date_start, $date_end)
  {
    $andres = $this->getTotalAdvisors(
      'Andrés Rojas',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $diego = $this->getTotalAdvisors(
      'Diego Peña',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    return [$andres, $diego];
  }

}