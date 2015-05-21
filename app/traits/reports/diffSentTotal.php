<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait diffSentTotal {

  public function diff_sent_total(
    $comparison, 
    $type_category, 
    $type, 
    $client_type, 
    $date_start, 
    $date_end
  )
  {
    $collection = quotation::where('quotations.status', '=', 'Efectiva')
      ->where('quotations.type', 'like', $type)
      ->where('quotations.client_type', 'like', $client_type)
      ->where('type_category', '=', $type_category)
      ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
      ->whereRaw("created_sent_diff ". $comparison)->count();

    return $collection;
  }

  public function allByDiff($type, $client_type, $date_start, $date_end){
    $stock = $this->diff_sent_total(
      "<= 30", "Inventario",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $order = $this->diff_sent_total(
      "<= 120",
      "Pedido",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $outStock = $this->diff_sent_total(
      "> 30",
      "Inventario",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $outOrder = $this->diff_sent_total(
      "> 120",
      "Pedido",
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    return [
    $stock,
    $outStock,
    $order,
    $outOrder
    ];

  }
}
