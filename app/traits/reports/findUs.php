<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait findUs {

  public function getTotalFoundUs(
    $found_us,
    $type,
    $client_type,
    $date_start,
    $date_end
  ) {

    $collection = quotation::where('quotations.found_us', $found_us)
    ->where('quotations.type', 'like', $type)
    ->where('quotations.client_type', 'like', $client_type)
    ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
    ->whereNotIn('quotations.status', ['Replanteada'])
    ->join('products', 'quotations.id', '=', 'products.quotation_id')
    ->select(DB::raw("SUM(total) AS products_total"))
    ->get();

    return $collection[0]->products_total;
  }

  public function allByFindUs($type, $client_type, $date_start, $date_end)
  {
    $advisors = $this->getTotalFoundUs(
      'Asesores comerciales',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $client = $this->getTotalFoundUs(
      'Cliente',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $web = $this->getTotalFoundUs(
      'Página Web Avante',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $adwords = $this->getTotalFoundUs(
      'Google Adwords',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $referred = $this->getTotalFoundUs(
      'Referido',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $promotion = $this->getTotalFoundUs(
      'Promoción',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $yellow_pages = $this->getTotalFoundUs(
      'Paginas Amarilladas',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $yellow_pages_web = $this->getTotalFoundUs(
      'Paginas Amarilladas Web',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $phone = $this->getTotalFoundUs(
      'Teléfono',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $social_network = $this->getTotalFoundUs(
      'Redes Sociales',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    return [
      $advisors,
      $client,
      $web,
      $adwords,
      $referred,
      $promotion,
      $yellow_pages,
      $yellow_pages_web,
      $phone,
      $social_network
    ];
  }

}