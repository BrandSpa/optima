<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

//Its broken open closed principle
trait findUsCount {

  public function TotalFoundUsCount (
    $found_us,
    $status,
    $type,
    $client_type,
    $date_start,
    $date_end
  ) {

    $total = quotation::where('quotations.found_us', $found_us)
    ->where('quotations.type', 'like', $type)
    ->where('quotations.status', 'like', $status)
    ->where('quotations.client_type', 'like', $client_type)
    ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
    ->whereNotIn('quotations.status', ['Replanteada'])
    ->count();

    return $total;
  }

  public function allByFindUsCount(
    $status,
  	$type,
  	$client_type,
  	$date_start,
  	$date_end
  ) {

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
      $total = $this->totalFoundUsCount(
        $found_us,
        $status,
        $type,
        $client_type,
        $date_start,
        $date_end
      );

      array_push($results, $total);
    }

    return $results;
  }

}