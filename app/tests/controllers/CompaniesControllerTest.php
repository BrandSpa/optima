<?php

class CompaniesControllerTest extends TestCase {

	public function setUp() 
	{
		parent::setUp();
		$this->mock('Optima\Repositories\Company\CompanyRepositoryInterface');
	}

	public function testIndex() 
	{
		$this->mock->shouldReceive('all')->once()->andReturn('foo');

		//$this->call('GET', 'companies');
		//$this->assertResponseOk();

	}

	public function testStore() 
	{
		$inputs = ['name' => 'brandpa', 'nit' => '123'];

		$this->mock->shouldReceive('store')->once()->andReturn(true);

		$this->call('POST', 'companies', $inputs);
	}

	public function testStoreFails() 
	{
		$inputs = ['name' => ''];

		$this->mock->shouldReceive('store')->once()->with($inputs);

		$this->call('POST', 'companies', $inputs);

	}

}