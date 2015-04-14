<?php
use \ApiTester;

class TodoResourceCest
{
	protected $endpoint = '/api/v1/todos';

    public function _before(ApiTester $I)
    {
    	//login user
    	$I->amLoggedAs(['email' => 'alejandro@brandspa.com', 'password' => '0PT1M4.cc']);
    }

    public function _after(ApiTester $I)
    {
    }

    public function storeTodo(ApiTester $I)
    {
    	$todoData = [
    		'user_id' => 1,
    		'from_user' => 1,
    		'title' => 'new todo',
    		'description' => 'test this todo',
    		'expires_date' => date("Y-m-d"),
    		'expires_time' => date("H:i:s")
    	];

    	$I->sendPOST($this->endpoint, $todoData);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();
    	$id = $I->grabDataFromJsonResponse('id');
    	$I->seeResponseContainsJson([
    		'id' => $id,
    	 	'from_user' => 1,
    		'title' => 'new todo',
    		'description' => 'test this todo',
    		'expires_date' => date("Y-m-d"),
    		'expires_time' => date("H:i:s"),
    		'user' => [
    			'id' => 1
    		]
    	 ]);

    }
}