<?php

function priceFormat($price) 
{
	return number_format($price, null, ',',',');
}