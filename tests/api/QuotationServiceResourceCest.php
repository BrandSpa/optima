<?php
use \ApiTester;

class QuotationServiceResourceCest
{

	protected $quotationId;
	protected $serviceId;

    public function _before(ApiTester $I)
    {
    	$I->amLoggedAs(['email' => 'alejandro@brandspa.com', 'password' => '0PT1M4.cc']);
    	$dataQuotation = [
    		'user_id' => 1,
    		'contact_id' => 1,
    		'company_id' => 1
    	];

    	// store quotation
    	$I->sendPOST('/api/v1/quotations', $dataQuotation);
    	//get id from stored quotation
    	$this->quotationId = $I->grabDataFromJsonResponse('id');
    	
    	$dataService = [
    		'title' => 'This is a service title',
    		'text' => 'This is a service text'
    	];

    	//store service
    	$I->sendPOST('/api/v1/services', $dataService);
    	//get id from stored service
    	$this->serviceId = $I->grabDataFromJsonResponse('id');
    }

    public function _after(){
    	DB::table('companies')->truncate();
    	DB::table('contacts')->truncate();
    	DB::table('quotations')->truncate();
    	DB::table('services')->truncate();
    	DB::table('quotation_service')->truncate();
    }

    public function getAllRelationServices(ApiTester $I)
    {

    	//store another service for validate that quotation have two services
    	$dataService = [
    		'title' => 'This is a service title 2',
    		'text' => 'This is a service text 2'
    	];
    	//store service
    	$I->sendPOST('/api/v1/services', $dataService);
    	//get id from stored service
    	$serviceId2 = $I->grabDataFromJsonResponse('id');

    	//attach services to quotation
    	$data1 = ['service_id' => $this->serviceId ];
    	$data2 = ['service_id' => $serviceId2 ];
    	$I->sendPOST("/api/v1/quotations/$this->quotationId/services", $data1);
    	$I->sendPOST("/api/v1/quotations/$this->quotationId/services", $data2);


    	$I->sendGET("/api/v1/quotations/$this->quotationId/services");
    	$I->seeResponseCodeIs(200);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson([
 			['id' => $this->serviceId ],
        	['id' => $serviceId2 ] 
   
        ]);
    }

    public function attachQuotationService(ApiTester $I)
    {
    	$data = ['service_id' => $this->serviceId ];
    	$I->sendPOST("/api/v1/quotations/$this->quotationId/services", $data);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson([
        	'id' => $this->quotationId,
        	'services' => [
        		['id' => $this->serviceId ],
        	]
        ]);
    }

    public function detachQuotationService(ApiTester $I)
    {
    	$I->sendDELETE("/api/v1/quotations/$this->quotationId/services/$this->serviceId");
    	$I->seeResponseCodeIs(204);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson([]);
    }
}