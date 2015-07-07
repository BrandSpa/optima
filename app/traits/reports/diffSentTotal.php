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

  public function allByDiff($type, $client_type, $date_start, $date_end)
  {

    $arr = [
      'stock' => [
        "<= 30",
        "Inventario"
      ],
      'order' => [
         "<= 120",
        "Pedido"
      ],

      'outStock' => [
        "> 30",
        "Inventario"
      ],
      'outOrder' => [
        "> 120",
        "Pedido"
      ]
    ];

    $result = [];

    foreach ($arr as $value) {
      $total = $this->diff_sent_total(
        $value[0],
        $value[1],
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
