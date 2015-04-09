<?php namespace Optima\Pdf;

use PDF;

class QuotationPdf implements PdfInterface {
	
	public function show($html) 
	{		
		return PDF::load(utf8_decode($html), 'letter', 'portrait')->show();
	}

}