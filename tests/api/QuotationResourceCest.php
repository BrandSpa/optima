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

    public function _after(){
    	DB::table('companies')->truncate();
    	DB::table('contacts')->truncate();
    	DB::table('quotations')->truncate();
    	DB::table('services')->truncate();
    	DB::table('quotation_service')->truncate();
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

    public function sendQuotation(ApiTester $I)
    {
    	$quotationData = [
    	'user_id' => 1,
        'company_id' => $this->companyId,
        'contact_id' => $this->contactId,
        ];

		$I->sendPOST($this->endpoint, $quotationData);
		$quotationId = $I->grabDataFromJsonResponse('id');

    	$I->sendPOST("/api/v1/quotations/$quotationId/sendmail");
    	$I->seeResponseContainsJson($quotationData );
    }

    public function sendQuotationWithRecipients(ApiTester $I)
    {
    	$quotationData = [
    	'user_id' => 1,
        'company_id' => $this->companyId,
        'contact_id' => $this->contactId,
        'mail_recipient_1' => 'test1@brandspa.com',
        'mail_recipient_2' => 'test2@brandspa.com',
        ];

		$I->sendPOST($this->endpoint, $quotationData);
		$quotationId = $I->grabDataFromJsonResponse('id');

    	$I->sendPOST("/api/v1/quotations/$quotationId/sendmail");
    	$I->seeResponseContainsJson($quotationData);
    }

    public function updateQuotationStatusAndTimes(ApiTester $I)
    {
    	$quotationData = [
    	'user_id' => 1,
        'company_id' => $this->companyId,
        'contact_id' => $this->contactId,
        ];

		$I->sendPOST($this->endpoint, $quotationData);
		$quotationId = $I->grabDataFromJsonResponse('id');

		$quotationDataUpdate = [
			'status' => 'Enviada',
			'sent_at' => date('Y-m-d'), 
			'created_sent_diff' => 5
		];

		$I->sendPUT($this->endpoint."/$quotationId", $quotationDataUpdate);
		$I->seeResponseContainsJson([
			'id' => $quotationId,
			'status' => 'Enviada',
			'sent_at' => date('Y-m-d'), 
			'created_sent_diff' => 5
		]);
    }

    public function FilterResults(ApiTester $I)
    {
    	//add some quotations with differents labels, advisors and client type.
    	$quotationData1 = [
    		'company_id' => '1',
    		'contact_id' => '1',
    		'status' => 'Borrador',
    		'advisor' => 'Andrés Rojas',
    		'client_type' => 'Activo'
    	];

    	$I->sendPOST($this->endpoint, $quotationData1);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

    	$quotationData2 = [
    		'company_id' => '1',
    		'contact_id' => '1',
    		'status' => 'Seguimiento',
    		'advisor' => 'Diego Peña',
    		'client_type' => 'Nuevo'
    	];

    	$I->sendPOST($this->endpoint, $quotationData2);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

    	$quotationData3 = [
    		'company_id' => '1',
    		'contact_id' => '1',
    		'status' => 'No enviada',
    		'advisor' => 'Andrés Rojas',
    		'client_type' => 'Activo'
    	];
    	$I->sendPOST($this->endpoint, $quotationData3);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

    	$quotationData4 = [
    		'company_id' => '1',
    		'contact_id' => '1',
    		'status' => 'Efectiva',
    		'advisor' => 'Diego Peña',
    		'client_type' => 'Inactivo'
    	];
    	$I->sendPOST($this->endpoint, $quotationData4);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

    	$quotationData5 = [
    		'company_id' => '1',
    		'contact_id' => '1',
    		'status' => 'No efectiva',
    		'advisor' => 'Andrés Rojas',
    		'client_type' => 'Nuevo'
    	];
    	$I->sendPOST($this->endpoint, $quotationData5);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

    	$quotationData6 = [
    		'company_id' => '1',
    		'contact_id' => '1',
    		'status' => 'Enviada',
    		'advisor' => 'Diego Peña',
    		'client_type' => 'Activo'
    	];
    	$I->sendPOST($this->endpoint, $quotationData6);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();


        $quotationData7 = [
    		'company_id' => '1',
    		'contact_id' => '1',
    		'status' => 'Replanteada',
    		'advisor' => 'Otros',
    		'client_type' => 'Inactivo'
    	];
    	$I->sendPOST($this->endpoint, $quotationData7);
    	$I->seeResponseCodeIs(201);
        $I->seeResponseIsJson();

    	//filter by label
    	$filterStatus1 = ['status' => 'Borrador'];
    	$I->sendGET($this->endpoint, $filterStatus1);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatus1);

        $filterStatus2 = ['status' => 'Enviada'];
    	$I->sendGET($this->endpoint, $filterStatus2);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatus2);

        $filterStatus3 = ['status' => 'Seguimiento'];
    	$I->sendGET($this->endpoint, $filterStatus3);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson( $filterStatus3);

        $filterStatus4 = ['status' => 'Efectiva'];
    	$I->sendGET($this->endpoint, $filterStatus4);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatus4);

        $filterStatus5 = ['status' => 'No enviada'];
    	$I->sendGET($this->endpoint, $filterStatus5);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatus5);

        $filterStatus6 = ['status' => 'No efectiva'];
    	$I->sendGET($this->endpoint, $filterStatus6);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatus6);

        $filterStatus7 = ['status' => 'Replanteada'];
    	$I->sendGET($this->endpoint, $filterStatus7);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatus7);

    	//filter by advisor
    	$filterAdvisor1 = ['advisor' => 'Andrés Rojas'];
    	$I->sendGET($this->endpoint, $filterAdvisor1);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([
        	$filterAdvisor1,
        	$filterAdvisor1,
        	$filterAdvisor1
        ]);

        $filterAdvisor2 = ['advisor' => 'Diego Peña'];
    	$I->sendGET($this->endpoint, $filterAdvisor2);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([
        	$filterAdvisor2,
        	$filterAdvisor2,
        	$filterAdvisor2
        ]);

    	//filter by client type
        $filterAdvisor3 = ['client_type' => 'Activo'];
    	$I->sendGET($this->endpoint, $filterAdvisor3);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([
        	$filterAdvisor3,
        	$filterAdvisor3
        ]);

        $filterAdvisor4 = ['client_type' => 'Inactivo'];
    	$I->sendGET($this->endpoint, $filterAdvisor4);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([
        	$filterAdvisor4
        ]);

        $filterAdvisor5 = ['client_type' => 'Nuevo'];
    	$I->sendGET($this->endpoint, $filterAdvisor5);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([
        	$filterAdvisor5,
        	$filterAdvisor5
        ]);

    	//filter by status and advisor
    	$filterStatusAdvisor1 = ['status' => 'Borrador', 'advisor' => 'Andrés Rojas'];
    	$I->sendGET($this->endpoint, $filterStatusAdvisor1);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([$filterStatusAdvisor1]);

        $filterStatusAdvisor2 = ['status' => 'Enviada', 'advisor' => 'Diego Peña'];
    	$I->sendGET($this->endpoint, $filterStatusAdvisor2);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatusAdvisor2);

        $filterStatusAdvisor3 = ['status' => 'Seguimiento', 'advisor' => 'Diego Peña'];
    	$I->sendGET($this->endpoint, $filterStatusAdvisor3);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([$filterStatusAdvisor3]);

        $filterStatusAdvisor4 = ['status' => 'No enviada', 'advisor' => 'Andrés Rojas'];
    	$I->sendGET($this->endpoint, $filterStatusAdvisor4);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatusAdvisor4);

        $filterStatusAdvisor5 = ['status' => 'No efectiva', 'advisor' => 'Andrés Rojas'];
    	$I->sendGET($this->endpoint, $filterStatusAdvisor5);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson($filterStatusAdvisor5);

        $filterStatusAdvisor6 = ['status' => 'Replanteada', 'advisor' => 'Otros'];
    	$I->sendGET($this->endpoint, $filterStatusAdvisor6);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([$filterStatusAdvisor6]);

    	//filter by status, advisor and client type
    	$filterStatusAdvisorClientType1 = array_merge($filterStatusAdvisor1, ['client_type' => 'Activo']);
    	$I->sendGET($this->endpoint, $filterStatusAdvisorClientType1);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([$filterStatusAdvisorClientType1]);

    	$filterStatusAdvisorClientType2 = array_merge($filterStatusAdvisor2, ['client_type' => 'Activo']);
    	$I->sendGET($this->endpoint, $filterStatusAdvisorClientType2);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([$filterStatusAdvisorClientType2]);

        $filterStatusAdvisorClientType3 = array_merge($filterStatusAdvisor3, ['client_type' => 'Nuevo']);
    	$I->sendGET($this->endpoint, $filterStatusAdvisorClientType3);
    	$I->seeResponseCodeIs(200);
        $I->seeResponseContainsJson([$filterStatusAdvisorClientType3]);

    	//filter by client type, advisor, status
    	//filter by client type, advisor, status and search
    }


}