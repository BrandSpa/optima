<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait findUs {

  public function getTotalFoundUs(
    $found_us,
    $status,
    $type,
    $client_type,
    $date_start,
    $date_end
  ) {

    $collection = quotation::where('quotations.found_us', $found_us)
    ->where('quotations.type', 'like', $type)
    ->where('quotations.status', 'like', $status)
    ->where('quotations.client_type', 'like', $client_type)
    ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
    ->whereNotIn('quotations.status', ['Replanteada'])
    ->join('products', 'quotations.id', '=', 'products.quotation_id')
    ->select(DB::raw("SUM(total) AS products_total"))
    ->get();

    return $collection[0]->products_total;
  }

  public function allByFindUs($status, $type, $client_type, $date_start, $date_end)
  {
    $found_us_list = [
      'Asesores comerciales',
      'Cliente',
      'Página Web Avante',
      'Google Adwords',
      'Referido',
      'Promoción',
      'Paginas Amarilladas',
      'Paginas Amarilladas Web',
      'Teléfono',
      'Redes Sociales'
    ];

    $results = [];

    foreach ($found_us_list as $found_us) {
      $total = $this->getTotalFoundUs(
        $found_us,
        $status,
        $type,
        $client_type,
        $date_start,
        $date_end
      );
      if (is_null($total)) {
        $total = 0;
      }
      array_push($results, $total);
    }

    return $results;
  }

}