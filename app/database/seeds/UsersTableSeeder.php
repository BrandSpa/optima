<?php

class UsersTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		// DB::table('users')->truncate();

		$users = array(
			//['name' => 'Carlos', 'lastname' => 'Linares', 'email' => 'cotizacion@avante.cc', 'password' => Hash::make('0PT1M4.cc'), 'created_at'=> new DateTime]
			['name' => 'Diego', 'lastname' => 'Peña', 'email' => 'diego@avante.cc', 'password' => Hash::make('0PT1M4.cc'), 'created_at'=> new DateTime],
			['name' => 'Mauricio', 'lastname' => 'Avendaño', 'email' => 'mauricio@avante.cc', 'password' => Hash::make('0PT1M4.cc'), 'created_at'=> new DateTime],
			['name' => 'Lorena', 'lastname' => 'Pineda', 'email' => 'lorena@avante.cc', 'password' => Hash::make('0PT1M4.cc'), 'created_at'=> new DateTime]
		);

		// Uncomment the below to run the seeder
		DB::table('users')->insert($users);
	}

}
