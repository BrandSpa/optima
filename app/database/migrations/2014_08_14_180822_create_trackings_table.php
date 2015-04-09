<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTrackingsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('trackings', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('quotation_id');
			$table->integer('contact_id');
			$table->date('register_date');
			$table->time('register_time');
			$table->date('created_date');
			$table->time('created_time');
			$table->text('report');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('trackings');
	}

}
