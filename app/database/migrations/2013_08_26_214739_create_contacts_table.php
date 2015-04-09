<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateContactsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('contacts', function(Blueprint $table) {
			$table->increments('id');
      $table->integer('company_id')->unsigned();
			$table->string('name');
			$table->string('lastname');
			$table->string('gender', 20);
			$table->string('title', 150);
			$table->string('position', 150);
			$table->string('email', 150);
			$table->string('phone_1', 20);
			$table->string('phone_2', 20);
			$table->string('mobile_1', 20);
			$table->string('mobile_2', 20);
			$table->string('fax', 20);
			$table->string('pay_method', 50);
			$table->string('found_us', 50);
			$table->string('who_call', 50);
			$table->text('comment');
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
		Schema::drop('contacts');
	}

}
