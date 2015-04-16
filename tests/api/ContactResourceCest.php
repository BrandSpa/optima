<?php
use \ApiTester;

class ContactResourceCest
{

	protected $endpoint = '/api/v1/contacts';

    public function _before(ApiTester $I)
    {

    }

    public function _after(ApiTester $I)
    {
    	DB::table('companies')->truncate();
    	DB::table('contacts')->truncate();
    }

    
    public function storeContact(ApiTester $I)
    {
    	$contactData = [
    		'company_id' => 1,
    		'name' => 'Alejandro',
    		'lastname' => 'Sanabria',
    		'email' => 'alejandro@brandspa.com',
    		'gender' => 'Masculino',
    		'title' => 'Developer'
    	];

    	$I->sendPOST($this->endpoint, $contactData);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();
        $contactId = $I->grabDataFromJsonResponse('id');
        $dataStored = array_merge($contactData, ['id' => $contactId]);
        $I->seeResponseContainsJson($dataStored);
    }

    	public function searchCompany(ApiTester $I)
  	{	
  		$contactData1 = [
	        'company_id' => 1,
    		'name' => 'Alejandro 1',
    		'lastname' => 'Sanabria',
    		'email' => 'alejandro@brandspa.com',
    		'gender' => 'Masculino',
    		'title' => 'Developer'
        ];

        $contactData2 = [
	       	'company_id' => 1,
    		'name' => 'Alejandro 2',
    		'lastname' => 'Sanabria',
    		'email' => 'alejandro@brandspa.com',
    		'gender' => 'Masculino',
    		'title' => 'Developer'
        ];

        $I->sendPOST('/api/v1/contacts', $contactData1);
        $I->sendPOST('/api/v1/contacts', $contactData2);

  		$data = ["query" => "ale"];
  		$I->sendGET("/api/v1/contacts", $data);
  		$I->seeResponseCodeIs(200);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson([
        	[
	        'company_id' => 1,
    		'name' => 'Alejandro 1',
    		'lastname' => 'Sanabria',
    		'email' => 'alejandro@brandspa.com',
    		'gender' => 'Masculino',
    		'title' => 'Developer'
        	],
        	[
		        'company_id' => 1,
	    		'name' => 'Alejandro 2',
	    		'lastname' => 'Sanabria',
	    		'email' => 'alejandro@brandspa.com',
	    		'gender' => 'Masculino',
	    		'title' => 'Developer'
        	]
        ]);

  	}
}