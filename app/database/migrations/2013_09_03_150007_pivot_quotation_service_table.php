<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class PivotQuotationServiceTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('quotation_service', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('quotation_id')->unsigned()->index();
			$table->integer('service_id')->unsigned()->index();
			$table->foreign('quotation_id')->references('id')->on('quotations')->onDelete('cascade');
			$table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');
		});
	}



	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('quotation_service');
	}

}
