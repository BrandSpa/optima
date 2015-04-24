<?php
class PagesController extends BaseController {
  
  protected $layout = "layouts.master";

  public function companies()
  {
    $this->layout->content = View::make('companies.index');
  }

  public function contacts()
  {
    $this->layout->content = View::make('contacts.index');
  }

  public function quotations()
  {
    return View::make('layouts.master');
  }

  public function quotation($id)
  {
    $this->layout->content = View::make('quotations.show');
  }

  public function services()
  {
    $this->layout->content = View::make('services.index');
  }

  public function results()
  {
  	$this->layout->content = View::make('results.index');
  }

}