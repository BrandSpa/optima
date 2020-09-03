<?php
use Optima\Pdf\SolicitudesPdf as DOMPDF;
use Optima\Solicitudes;
use Carbon\Carbon;
use Knp\Snappy\Pdf;

class SolicitudesController extends BaseController {

	protected $layout = "layouts.master";
	protected $solicitudes;
	protected $pdf;

	public function __construct ( DOMPDF $pdf, Solicitudes $solicitudes )	
	{ 
		$this->solicitudes = $solicitudes; 
		$this->pdf = $pdf; 
	}

	public function index()
	{
		return View::make('layouts.master');
	}

	public function show($id)
	{
		$this->layout->content = View::make('solicitudess.show');
	}

	public function getPdf($id)
	{
		$solicitudes = $this->solicitudes->with(['company', 'contact', 'products', 'services', 'user'])->find($id)->toArray();
		$html = View::make('layouts.pdf_react', compact('solicitudes'));
		return $html;
	}

	public function viewMail( $id ){
		
		if($id == 1){
			$data = array(
				"data" => array(
					'message' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam purus lacus, volutpat sed ipsum in, pulvinar aliquet enim. Phasellus ultrices risus non dapibus facilisis. Morbi quis suscipit mauris, a hendrerit enim. Pellentesque purus neque, suscipit vel mattis tempor, iaculis eu lorem. Praesent pulvinar tellus sit amet eros sollicitudin viverra. Sed finibus nisl vel tellus pulvinar, aliquam maximus mi vulputate. Aenean condimentum diam vel fringilla malesuada.",
					'name' => "Michael",
					"lastname" => "Sanchez",
					"url" => "http://michaelsanchez.co",
					"service_approval" => 1,
					"user" => "User"
				)
			);
			return View::make('emails.solicitudes', $data);
		}

		if($id == 2){
			$collection = new solicitudes();
			$collection = $collection->where("id", 100);
			$data = array(
				"collection" => $collection
			);
			return View::make('emails.todos_remains', $data);
		}

		if($id == 3){
			$collection = new solicitudes();
			$collection = $collection->where("id", 100);
			$data = array(
				"collection" => $collection,
				"data" => (object) array(
					"user" => (object) array(
						'message' => "Hola k ase",
						'name' => "Michael",
						"lastname" => "Sanchez",
						"url" => "http://michaelsanchez.co",
						"service_approval" => 1,
						"user" => "User"
					),
					"expires_date" => "12/dic/2001",
					"expires_time" => "13:00:00",
					"title" => "remember",
					"description" => "description"
				)
			);
			return View::make('emails.todos', $data);
		}

		if( $id == 4 ) {
			$data = array('token' => "abcjahdjsadka");
			return View::make('emails.auth.reminder', $data);

		}
		
	}

	public function Showpdf($id, $hash)
	{
		$solicitudes = $this->solicitudes->find($id);

		$html = View::make('pdfs.solicitudes', compact('solicitudes'));

		return $this->pdf->show($html);
	}

	public function getPdfBn($id)
	{
		$solicitudes = Solicitudes::find($id);
		$html = View::make('pdfs.solicitudes_bn', compact('solicitudes'));

		return $this->pdf->show($html);
	}

	public function getPdfLogos($id)
	{
		$solicitudes = $this->solicitudes->find($id);

		$html = View::make('pdfs.solicitudes_logos', compact('solicitudes'));

		return $this->pdf->show($html);
	}

	public function wkpdf($id) {
		// $snappy = new Pdf(base_path() . '/vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64');
		$snappy = new Pdf('wkhtmltopdf');
		// $snappy->setOption('javascript-delay', 3000);
		$snappy->setOption( 'lowquality' , false);
		// $snappy->setOption('footer-font-name', 'Nunito');
		$snappy->setOption('footer-font-size', '10');
		$snappy->setOption('footer-right', 'Código: FO-COM-02 Fecha: 25-mar-2014 Versión 6');
		// $snappy->setOption('page-size', 'Letter');

		header('Content-Type: application/pdf');
		// header('Content-Disposition: attachment; filename="file.pdf"');
		// echo 'http://localhost:8000/solicitudess/'. $id .'/pdfhtml';
		echo $snappy->getOutput('http://localhost:4040/solicitudess/'.  $id .'/pdfhtml');
	}

	public function duplicate($id)
	{
		$model = Solicitudes::duplicate($id, "duplicate");
		return Redirect::to('/solicitudes/'.$model->id);
	}

	public function toQuotation($id)
	{
		$model = Solicitudes::toQuotation($id, "duplicate");
		return Redirect::to('/quotations/'.$model->id);
	}

	public function rethink($id)
	{
		$quo = Solicitudes::find($id);
		$quo->status = 'Replanteada';
		$quo->save();
		$model = Solicitudes::duplicate($id, "rethink");
		$model->rethink_from = $id;
		$model->status_cause = '';
		$model->save();

		return Redirect::to('/solicitudes/'.$model->id);
	}

	public function getExcel() {
			$now = Carbon::now();
			$status = Input::get('status');
			$priority = Input::get('priority');
			$advisor = Input::get('advisor');
			$client_type = Input::get('client_type');
			$solicitudes_type = Input::get('solicitudes_type');
			$date_start = Input::get('date_start') ? Input::get('date_start') : $now->year."-".$now->month."-1";
			$date_end = Input::get('date_end') ? Input::get('date_end') : $now->year."-".$now->month."-31";
			$collection = new Solicitud;

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

		if( Input::has('solicitudes_type') && $solicitudes_type != "" ) {
			$collection = $collection->where("type", $solicitudes_type);
		}

		$collection = $collection->whereRaw("solicitudess.created_at BETWEEN '" . urldecode($date_start) . "' AND '" . urldecode($date_end) . "'");	
		
		$model = $collection
			->with([
				'company' => function($query){
				 $query->select('id', 'name', 'sector');
				 },
				 'contact' => function($query){
				 $query->select('id', 'name', 'lastname', 'email', 'birthday');
				 } 
			])
			->select('id', 'status', 'created_at', 'sent_at', DB::raw('CONCAT(TIMESTAMPDIFF(MINUTE,created_at, sent_at), " Minutos") as Diff'),'company_id', 'contact_id', 'found_us','client_type', 'type', 'advisor', 'type_category as categoria', 'status_note')
			->orderBy('id', 'DESC')
			->get()
			->toArray();
			
			$newModel = [];

			foreach($model as $mo) {
				$mo['company_name'] = $mo['company']['name'];
				$mo['company_sector'] = $mo['company']['sector'];
				$mo['contact_name'] = $mo['contact']['name'] .' '. $mo['contact']['lastname'];
				$mo['contact_email'] = $mo['contact']['email'];
				$mo['contact_birthday'] = $mo['contact']['birthday'];
				array_push($newModel, $mo);
			}

			return Excel::create('cotizaciones', function($excel) use($newModel) {

				$excel->sheet('Sheetname', function($sheet) use($newModel) {

					$sheet->fromArray($newModel, null);

				});

		})->export('csv');
	}
}