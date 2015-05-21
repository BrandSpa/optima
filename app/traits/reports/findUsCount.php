<?php namespace Traits\Reports;

use Optima\Quotation;
use DB;

trait findUsCount {

  public function getTotalFoundUsCount(
    $found_us,
    $type,
    $client_type,
    $date_start,
    $date_end
  ) {

    $total = quotation::where('quotations.found_us', $found_us)
    ->where('quotations.type', 'like', $type)
    ->where('quotations.client_type', 'like', $client_type)
    ->whereRaw("DATE(quotations.created_at) BETWEEN '$date_start' AND '$date_end' ")
    ->whereNotIn('quotations.status', ['Replanteada'])
    ->count();

    return $total;
  }

  public function allByFindUsCount($type, $client_type, $date_start, $date_end)
  {
    $advisors = $this->getTotalFoundUsCount(
      'Asesores comerciales',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $client = $this->getTotalFoundUsCount(
      'Cliente',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $web = $this->getTotalFoundUsCount(
      'Página Web Avante',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $adwords = $this->getTotalFoundUsCount(
      'Google Adwords',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $referred = $this->getTotalFoundUsCount(
      'Referido',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $promotion = $this->getTotalFoundUsCount(
      'Promoción',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $yellow_pages = $this->getTotalFoundUsCount(
      'Paginas Amarilladas',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $yellow_pages_web = $this->getTotalFoundUsCount(
      'Paginas Amarilladas Web',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $phone = $this->getTotalFoundUsCount(
      'Teléfono',
      $type,
      $client_type,
      $date_start,
      $date_end
      );

    $social_network = $this->getTotalFoundUsCount(
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