<?php

class TestCase extends Illuminate\Foundation\Testing\TestCase {

	protected $mock;

	/**
	 * Creates the application.
	 *
	 * @return Symfony\Component\HttpKernel\HttpKernelInterface
	 */
	public function createApplication()
	{
		$unitTesting = true;

		$testEnvironment = 'testing';

		return require __DIR__.'/../../bootstrap/start.php';
	}

	public function tearDown()
	{
		Mockery::close();
	}

	public function mock($class) 
	{
		$this->mock = Mockery::mock($class);

		//update ioc container of class for replace the mock version
		$this->app->instance($class, $this->mock);
		return $this->mock;
	}

}
