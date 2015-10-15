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
}