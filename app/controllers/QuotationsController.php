<?php

use Optima\Repositories\Quotation\QuotationRepositoryInterface;
use Optima\Pdf\QuotationPdf as Pdf;
use Optima\Mailers\QuotationMailer as Mailer;
use Optima\Notifies\Notify as Notify;
use Optima\Quotation;

class QuotationsController extends BaseController {

	protected $layout = "layouts.master";
	protected $quotation;
	protected $pdf;
	protected $mailer;
	protected $notify;

	public function __construct
	(
		QuotationRepositoryInterface $quotation,
		PDF $pdf,
		Mailer $mailer,
		Notify $notify
	)	{
		$this->quotation = $quotation;
		$this->pdf = $pdf;
		$this->mailer = $mailer;
		$this->notify = $notify;
	}

	public function index()
	{
		return View::make('layouts.master');
	}

	public function show($id)
	{
		$this->layout->content = View::make('quotations.show');
	}

	public function getPdf($id, $hash)
	{
		$quotation = $this->quotation->find($id);
		$html = View::make('pdfs.quotation', compact('quotation'));
		return $html;
	}

	public function Showpdf($id, $hash)
	{
		$quotation = $this->quotation->find($id);
		$html = View::make('pdfs.quotation', compact('quotation'));

		return $this->pdf->show($html);
	}

	public function getPdfBn($id)
	{
		$quotation = Quotation::find($id);

		$html = View::make('pdfs.quotation_bn', compact('quotation'));

		return $this->pdf->show($html);
	}

	public function getPdfLogos($id)
	{
		$quotation = $this->quotation->find($id);

		$html = View::make('pdfs.quotation_logos', compact('quotation'));

		return $this->pdf->show($html);
	}

	public function duplicate($id)
	{
		$model = Quotation::duplicate($id, "duplicate");
		return Redirect::to('/#quotations/'.$model->id);
	}

	public function rethink($id)
	{
		$quo = Quotation::find($id);
		$quo->status = 'Replanteada';
		$quo->save();
		$model = Quotation::duplicate($id, "rethink");
		$model->rethink_from = $id;
		$model->save();

		return Redirect::to('/#quotations/'.$model->id);
	}

		public function getExcel() {
			$today = new dateTime();
			$date_start = '2016-03-01 00:00:00';
			$date_end = $today->format('Y-m-d H:i:s');

			$collection = new Quotation;

			$collection = $collection->whereRaw("quotations.created_at BETWEEN '$date_start' AND '$date_end' ");

			$model = $collection
			->with('company', 'contact', 'user')
			->select('id', 'created_at', 'company_id', 'contact_id')
			->take(100)
			->skip(0)
			->orderBy('id', 'DESC')
			->get()
			->toArray();
			
			$newModel = [];

			foreach($model as $mo) {
				$mo['company_name'] = $mo['company']['name'];
				$mo['company_city'] = $mo['company']['city'];
				$mo['company_address'] = $mo['company']['address'];
				$mo['company_phone'] = $mo['company']['phone'];
				$mo['contact_name'] = $mo['contact']['name'] .' '. $mo['contact']['lastname'];
				$mo['contact_phone'] = $mo['contact']['phone_1'];
				$mo['contact_mobile'] = $mo['contact']['mobile_1'];
				$mo['contact_email'] = $mo['contact']['email'];
				$mo['contact_found_us'] = $mo['contact']['found_us'];
				array_push($newModel, $mo);
			}

			Excel::create('Filename', function($excel) use($newModel) {

				$excel->sheet('Sheetname', function($sheet) use($newModel) {

					$sheet->fromArray($newModel, null);

				});

		})->export('xls');
	}
}