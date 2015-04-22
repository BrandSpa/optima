<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('quotation_id')->unsigned();
			$table->string('name', 50);
			$table->string('type', 50);
			$table->string('processor', 150);
			$table->string('ram', 150);
			$table->string('hdd', 150);
			$table->string('burner', 150);
			$table->string('network_card', 150);
			$table->string('battery', 150);
			$table->string('monitor', 150); 
			$table->string('keyboard', 150);  
			$table->string('os', 150);
			$table->string('office', 150);  
			$table->string('antivirus', 150);
			$table->string('additional_1', 150);
			$table->string('additional_2', 150); 
			$table->string('additional_3', 150);  
			$table->string('additional_4', 150);  
			$table->string('additional_5', 150);  
			$table->string('additional_6', 150);   
			$table->integer('lapse')->unsigned();  
			$table->string('period', 50);
			$table->integer('quantity')->unsigned();  
			$table->integer('price')->unsigned();  
			$table->integer('total')->unsigned();  
			$table->boolean('show');
			$table->boolean('iva');
			$table->text('note');
			$table->string('spaces');		
			$table->string('ordered');		
			$table->string('position');		
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
		Schema::drop('products');
	}

}
