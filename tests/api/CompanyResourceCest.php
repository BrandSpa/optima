<?php
use \ApiTester;

class CompanyResourceCest
{
    public function _before(ApiTester $I)
    {

    }

    public function _after()
    {

    	DB::table('companies')->truncate();
    	DB::table('contacts')->truncate();
    }

  	public function storeCompany(ApiTester $I)
  	{
  		
        $companyData = [
	        'name' => 'Brand Spa',
	        'nit' => '123456789',
	        'sector' => 'Publicidad',
	        'city' => 'Bogotá',
	        'address' => 'cr 7 # 100 - 89',
	        'phone' => '1234567',
	        'type' => 'Nueva',
	        'web' => 'brandspa.com',
	        'comment' => 'lorem ipsom'
        ];

        $I->sendPOST('/api/v1/companies', $companyData);
        $I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();
        $companyId = $I->grabDataFromJsonResponse('id');
        $dataStored = array_merge($companyData, ['id' => $companyId]);
        $I->seeResponseContainsJson($dataStored);
  	}

  	public function updateCompany(ApiTester $I)
  	{
  		$companyData = [
	        'name' => 'Brand Spa',
	        'nit' => '123456789',
	        'sector' => 'Publicidad',
	        'city' => 'Bogotá',
	        'address' => 'cr 7 # 100 - 89',
	        'phone' => '1234567',
	        'type' => 'Nueva',
	        'web' => 'brandspa.com',
	        'comment' => 'lorem ipsom'
        ];
        $I->sendPOST('/api/v1/companies', $companyData);
        $I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();
        $companyId = $I->grabDataFromJsonResponse('id');

        $I->sendGET('/api/v1/companies/'."$companyId");

        $companyUpdate = [
        	'name' => 'Brand Spa S.A.S',
        	'web' => 'http://brandspa.com'
        ];

        $companyDataUpdate = array_merge($companyData, $companyUpdate);
        $I->sendPUT('/api/v1/companies/'."$companyId", $companyDataUpdate);
        $I->seeResponseCodeIs(200);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson($companyDataUpdate);
  	}

  	public function searchCompany(ApiTester $I)
  	{	
  		$data = ["query" => "avantel"];
  		$I->sendGET("/api/v1/companies", $data);
  		$I->seeResponseCodeIs(200);
        $I->seeResponseIsJson();
        $I->seeResponseContainsJson(["name" => "brand spa"]);

  	}

  	
}