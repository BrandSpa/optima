<?php
use Optima\Pdf\QuotationPdf as DOMPDF;
use Optima\Quotation;
use Carbon\Carbon;
use Knp\Snappy\Pdf;

class QuotationsController extends BaseController {

	protected $layout = "layouts.master";
	protected $quotation;
	protected $pdf;

	public function __construct ( DOMPDF $pdf, Quotation $quotation )	
	{ 
		$this->quotation = $quotation; 
		$this->pdf = $pdf; 
	}

	public function index()
	{
		return View::make('layouts.master');
	}

	public function show($id)
	{
		$this->layout->content = View::make('quotations.show');
	}

	public function getPdf($id)
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

	public function wkpdf($id) {
		$snappy = new Pdf(base_path() . '/vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64');
		$snappy->setOption('enable-javascript', true);
		$snappy->setOption('debug-javascript', true);
		// $snappy->setOption('footer-font-name', 'Nunito');
		// $snappy->setOption('footer-font-size', '9');
		// $snappy->setOption('footer-right', 'Código: FO-COM-02 Fecha: 25-mar-2014 Versión 6');
		header('Content-Type: application/pdf');
		echo $snappy->getOutput('http://react.avante.cc/quotations/39572/pdfhtml');

		// $quotation = Quotation::find($id);
		// $html = View::make('pdfs.quotation', compact('quotation'));
		// $file = 'quo-'. $id .'.pdf';
		// try {
		// 	unlink('public/' . $file);
		// } catch(Exception $e) {

		// }
		
		// $snappy->generateFromHtml($html, 'public/' . $file);
		// return Redirect::to('/' . $file);
	}

	public function duplicate($id)
	{
		$model = Quotation::duplicate($id, "duplicate");
		return Redirect::to('/quotations/'.$model->id);
	}

	public function rethink($id)
	{
		$quo = Quotation::find($id);
		$quo->status = 'Replanteada';
		$quo->save();
		$model = Quotation::duplicate($id, "rethink");
		$model->rethink_from = $id;
		$model->status_cause = '';
		$model->save();

		return Redirect::to('/quotations/'.$model->id);
	}

	public function getExcel() {
			$now = Carbon::now();
			$status = Input::get('status');
			$priority = Input::get('priority');
			$advisor = Input::get('advisor');
			$client_type = Input::get('client_type');
			$quotation_type = Input::get('quotation_type');
			$date_start = Input::get('date_start') ? Input::get('date_start') : $now->year."-".$now->month."-1";
			$date_end = Input::get('date_end') ? Input::get('date_end') : $now->year."-".$now->month."-31";
			$collection = new Quotation;

		if( Input::has('status') && $status != "" ) {
			$collection = $collection->where("status", $status);
		}

		if( Input::has('priority') && $priority != "" ) {
			$collection = $collection->where("priority", $priority);
		}

		if( Input::has('advisor') && $advisor != "" ) {
			$collection = $collection->where("advisor", $advisor);
		}

		if( Input::has('client_type') && $client_type != "" ) {
			$collection = $collection->where("client_type", $client_type);
		}

		if( Input::has('quotation_type') && $quotation_type != "" ) {
			$collection = $collection->where("type", $quotation_type);
		}

		$collection = $collection->whereRaw("quotations.created_at BETWEEN '" . urldecode($date_start) . "' AND '" . urldecode($date_end) . "'");	
		
		$model = $collection
			->with([
				'company' => function($query){
				 $query->select('id', 'name');
				 },
				 'contact' => function($query){
				 $query->select('id', 'name', 'lastname', 'found_us');
				 } 
			])
			->select('id', 'status', 'created_at', 'company_id', 'contact_id')
			->orderBy('id', 'DESC')
			->get()
			->toArray();
			
			$newModel = [];

			foreach($model as $mo) {
				$mo['company_name'] = $mo['company']['name'];
			// 	$mo['company_city'] = $mo['company']['city'];
			// 	$mo['company_address'] = $mo['company']['address'];
			// 	$mo['company_phone'] = $mo['company']['phone'];
				$mo['contact_name'] = $mo['contact']['name'] .' '. $mo['contact']['lastname'];
			// 	$mo['contact_phone'] = $mo['contact']['phone_1'];
			// 	$mo['contact_mobile'] = $mo['contact']['mobile_1'];
			// 	$mo['contact_email'] = $mo['contact']['email'];
				$mo['contact_found_us'] = $mo['contact']['found_us'];
				array_push($newModel, $mo);
			}

			return Excel::create('cotizaciones', function($excel) use($newModel) {

				$excel->sheet('Sheetname', function($sheet) use($newModel) {

					$sheet->fromArray($newModel, null);

				});

		})->export('csv');
	}
}