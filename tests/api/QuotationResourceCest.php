<?php
use \ApiTester;

class QuotationResourceCest
{
    protected $endpoint = '/api/v1/quotations';
    protected $companyId;
    protected $contactId;

    public function _before(ApiTester $I)
    {
    	//login user
    	$I->amLoggedAs(['email' => 'alejandro@brandspa.com', 'password' => '0PT1M4.cc']);

        //create a company
        $companyData = [
	        'name' => 'Brand Spa',
	        'nit' => '123456789',
	        'sector' => 'Publicidad',
	        'city' => 'Bogotá',
	        'address' => 'cr 7 # 100 - 89',
	        'phone' => '1234567'
        ];

        $I->sendPOST('/api/v1/companies', $companyData);
        $this->companyId = $I->grabDataFromJsonResponse('id');

        //create a contact
        $contactData = [
        	'company_id' => $this->companyId,
        	'name' => 'Alejandro',
        	'lastname' => 'Sanabria',
        	'email' => 'alejandro@brandspa.com'
        ];

        $I->sendPOST('/api/v1/contacts', $contactData);
        $this->contactId = $I->grabDataFromJsonResponse('id');
    }

     public function createQuotation(ApiTester $I)
    {

    	//check user is logged
    	$I->seeAuthentication();

        //pass user, company and contact for create a new quotation

        $quotationData = [
        'company_id' => $this->companyId,
        'contact_id' => $this->contactId,
        ];

        $I->sendPOST($this->endpoint, $quotationData);
        $I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

        $quotationId = $I->grabDataFromJsonResponse('id');

        $I->seeResponseContainsJson([
	        'id' => $quotationId,
	        'user_id' => 1,
	        'company_id' => $this->companyId,
	        'contact_id' => $this->contactId,
	        'status' => 'Borrador',
	        'sent_at' => NULL,

        ]);

    }

    public function getSingleQuotation(ApiTester $I)
    {
    	//check user is logged
		$I->seeAuthentication();

    	//create a new quotation
    	 $quotationData = [
	        'company_id' => $this->companyId,
	        'contact_id' => $this->contactId,
        ];

        $I->sendPOST($this->endpoint, $quotationData);
        $I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

        // get quotation by id
        $quotationId = $I->grabDataFromJsonResponse('id');

        $I->sendGET($this->endpoint."/$quotationId");
        $I->seeResponseCodeIs(200);
        $I->seeResponseIsJson();

        // validate json structure
        $I->seeResponseContainsJson([
	        'id' => $quotationId,
	        'user_id' => 0,
	        'company_id' => $this->companyId,
	        'contact_id' => $this->contactId,
	        'company' => [
	        	'id' => $this->companyId,
	        	'name' => 'Brand Spa',
		        'nit' => '123456789',
		        'sector' => 'Publicidad',
		        'city' => 'Bogotá',
		        'address' => 'cr 7 # 100 - 89',
		        'phone' => '1234567',
		        'contacts' => [
		        	0 => [
				        'id' => $this->contactId,
				        'company_id' => $this->companyId,
				        'name' => 'Alejandro',
				        'lastname' => 'Sanabria',
				        'email' => 'alejandro@brandspa.com'
			        ]
		        ]
	        ],
	        'user' => NULL
	        
        ]);
    }	

    public function updateQuotation(ApiTester $I)
    {
    	//check user is logged
		$I->seeAuthentication();

    	//create a new quotation
    	 $quotationData = [
	        'company_id' => $this->companyId,
	        'contact_id' => $this->contactId,
        ];

        $I->sendPOST($this->endpoint, $quotationData);
        $I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

        // get quotation by id
        $quotationId = $I->grabDataFromJsonResponse('id');

        $quotationDataUpdate = [
	        'comment' => 'Comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	        'mail_message' => 'MailMessage: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	        'offer' => 'Apple',
	        'mail_recipient_1' => 'alejandro@brandspa.com',
	        'status' => 'Borrador'
        ];

    	$I->sendPUT($this->endpoint."/$quotationId", $quotationDataUpdate);
        $I->seeResponseCodeIs(200);
        $I->seeResponseIsJson();
        $quotationDataUpdated = array_merge($quotationDataUpdate, ['id' => $quotationId]);
        $I->seeResponseContainsJson($quotationDataUpdated);
        $I->seeRecord('quotations', ['id' => $quotationId]);

    }

    public function getQuotations(ApiTester $I)
    {
    	//check user is logged
    	$I->seeAuthentication();

        //pass user, company and contact for create a new quotation

        $quotationData = [
        'company_id' => $this->companyId,
        'contact_id' => $this->contactId,
        ];

		$I->sendPOST($this->endpoint, $quotationData);
		$quotationId1 = $I->grabDataFromJsonResponse('id');

		$I->sendPOST($this->endpoint, $quotationData);
		$quotationId2 = $I->grabDataFromJsonResponse('id');

		$I->sendGET($this->endpoint);
		$I->seeResponseCodeIs(200);
        $I->seeResponseIsJson();

		$I->seeResponseContainsJson([
			[
				'id' => $quotationId1,
				'company_id' => $this->companyId,
        		'contact_id' => $this->contactId
			],
			[
				'id' => $quotationId2,
				'company_id' => $this->companyId,
        		'contact_id' => $this->contactId,
			]
			]);   
    }

    public function searchQuotationByCompanyName(ApiTester $I)
    {
    	$quotationData = [
        'company_id' => $this->companyId,
        'contact_id' => $this->contactId,
        ];

        $I->sendPOST($this->endpoint, $quotationData);
		$quotationId = $I->grabDataFromJsonResponse('id');

		$search = ['query' => 'Brand'];

		$I->sendGET($this->endpoint, $search);

		$I->seeResponseContainsJson(['id' => $quotationId]);
    }

    public function setServiceApproval(ApiTester $I)
    {
    	$quotationData = [
        'company_id' => $this->companyId,
        'contact_id' => $this->contactId,
        ];

		$I->sendPOST($this->endpoint, $quotationData);
		$quotationId = $I->grabDataFromJsonResponse('id');

		$I->sendPUT($this->endpoint."/$quotationId", ['service_approval' => 0]);
		$I->seeResponseContainsJson(['service_approval' => 0]);
    }

    public function setQuotationSendDiff(ApiTester $I)
    {

    }


}