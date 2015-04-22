<?php
use \ApiTester;

class ProductResourceCest
{
	protected $endpoint = "/api/v1/products";
	protected $productData;

    public function _before(ApiTester $I)
    {
    	$this->productData = [
    	'quotation_id' => '1',
		'name' => 'Desktop Pro',
		'type' => 'Desktop',
		'processor' => 'Intel core I7',
		'ram' => '8GB',
		'hdd' => '500GB',
		'burner' => '',
		'network_card' => '',
		'battery' => '',
		'monitor' => '17',
		'keyboard' => 'incluido',
		'os' => 'Windows 7 Pro',
		'office' => 'Office 2003',
		'antivirus' => 'NOD32',
		'additional_1',
		'additional_2',
		'additional_3',
		'additional_4',
		'additional_5',
		'additional_6',
		'lapse' => '6',
		'period' => 'Meses',
		'quantity' => '13',
		'price' => '120000',
		'total' => '',
		'show' => '',
		'iva' => '',
		'note' => 'Incluyen garantía',
		'spaces' => '2',
		'ordered' => '',
		'position' => ''
    	];
    }

    public function _after(ApiTester $I)
    {
    	DB::table('products')->truncate();
    	DB::table('quotations')->truncate();
    }

    public function storeProduct(ApiTester $I)
    {

    }

    public function updateProduct(ApiTester $I)
    {
    	
    }

    public function getProduct(ApiTester $I)
    {
    	
    }

    public function deleteProduct(ApiTester $I)
    {
    	
    }

    public function duplicateProduct(ApiTester $I)
    {
    	
    }

    
}