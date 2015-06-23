<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait ByStatus {

  /**
   * get total products by status
   * @return int
   */
  public function getTotalStatus($status, $type, $client_type, $date_start, $date_end ) {

    $collection =  Quotation::where('quotations.status', $status)
      ->where('quotations.type', 'LIKE', $type)
      ->where('quotations.client_type', 'LIKE', $client_type)
      ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
      ->join('products', 'quotations.id', '=', 'products.quotation_id')
      //->where('products.ordered', true)
      ->select( DB::raw("SUM(total) AS products_total") )
      ->get();

      return $collection[0]->products_total;
  }

  /**
   * All by status
   *
   * @return array
   */
  public function allByStatus($type, $client_type, $date_start, $date_end)
  {

    $effective = $this->getTotalStatus(
      'Efectiva',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $draft = $this->getTotalStatus(
      'Borrador',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $sent = $this->getTotalStatus(
      'Enviada',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $tracking = $this->getTotalStatus(
      'Seguimiento',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $not_effective = $this->getTotalStatus(
      'No efectiva',
      $type,
      $client_type,
      $date_start,
      $date_end
     );

    $not_sended = $this->getTotalStatus(
      'No enviada',
      $type,
      $client_type,
      $date_start,
      $date_end
     );

    return [
	    $draft,
	    $sent,
	    $tracking,
	    $effective,
	    $not_effective,
	    $not_sended
    ];
  }

}