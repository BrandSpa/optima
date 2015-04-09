<?php

class ServicesTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		// DB::table('services')->truncate();

		$services = array(
			[
				'title' => 'Titulo del servicio 1', 
				'text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, precio1, eaque laborum reiciendis excepturi libero minima sapiente doloremque possimus alias minus dolorem ratione voluptas incidunt quas. precio2, veritatis illum quibusdam.',
				'price_1' => '5000',
				'price_2' => '10000'
			],
			[
				'title' => 'Titulo del servicio 2', 
				'text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, precio1, eaque laborum reiciendis excepturi libero minima sapiente doloremque possimus alias minus dolorem ratione voluptas incidunt quas. precio2, veritatis illum quibusdam.',
				'price_1' => '15000',
				'price_2' => '25000'
			]
		);

		// Uncomment the below to run the seeder
		//DB::table('services')->insert($services);
	}

}
