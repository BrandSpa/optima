<?php

return array(

	/*
	|--------------------------------------------------------------------------
	| Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| The following language lines contain the default error messages used by
	| the validator class. Some of these rules have multiple versions such
	| such as the size rules. Feel free to tweak each of these messages.
	|
	*/

	"accepted"         => "El :attribute debe ser aceptado.",
	"active_url"       => "La :attribute no es una valida.",
	"after"            => "El :attribute must be a date after :date.",
	"alpha"            => "El :attribute solo puede contener letras.",
	"alpha_dash"       => "El :attribute solo puede contener letras, numeros, y puntos.",
	"alpha_num"        => "El :attribute solo puede contener letras y numeros.",
	"before"           => "El :attribute debe ser una fecha antes de :date.", 
	"between"          => array(
		"numeric" => "El :attribute debe estar entre :min - :max.",  
		"file"    => "El :attribute debe estar entre :min - :max kilobytes.",
		"string"  => "El :attribute debe estar entre :min - :max caracteres.",
	),
	"confirmed"        => ":attribute confirmación no coincide.", 
	"date"             => ":attribute no es una fecha valida.",
	"date_format"      => ":attribute no coincide con el formato :format.", 
	"different"        => ":attribute and :other must be different.",
	"digits"           => ":attribute debe ser :digits digitos.",
	"digits_between"   => ":attribute debe estar entre :min y :max digitos.",
	"email"            => ":attribute formato invalido.",
	"exists"           => ":attribute seleccionado es invalido.",
	"image"            => ":attribute deber ser una imagen.",
	"in"               => ":attribute seleccionado es invalido.",
	"integer"          => ":attribute debe ser un numero.",
	"ip"               => ":attribute debe ser una IP valida.",
	"max"              => array(
		"numeric" => ":attribute no puede ser mayor que than :max.", 
		"file"    => ":attribute no puede ser mayor que than :max kilobytes.",
		"string"  => ":attribute no puede ser mayor que than :max caracteres.", 
	),
	"mimes"            => "The :attribute debe se un archivo type: :values.",
	"min"              => array(
		"numeric" => ":attribute debe ser al menos :min.", 
		"file"    => ":attribute debe ser al menos :min kilobytes.",
		"string"  => ":attribute debe ser al menos :min caracteres.",
	),
	"not_in"           => ":attribute seleccionado es invalido.",
	"numeric"          => ":attribute debe ser un numero.",
	"regex"            => ":attribute formato es invalido.",
	"required"         => ":attribute campo requerido.",
	"required_if"      => ":attribute campo requerido cuando :other es :value.",
	"required_with"    => ":attribute campo requerido cuando :values es presente.",
	"required_without" => ":attribute campo requerido cuando :values no esta presente.",
	"same"             => ":attribute and :other debe coincidir.", 
	"size"             => array(
		"numeric" => ":attribute must be :size.",
		"file"    => ":attribute must be :size kilobytes.",
		"string"  => ":attribute must be :size caracteres.",
	),
	"unique"           => ":attribute ya existe.", 
	"url"              => ":attribute formato invalido.",

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| Here you may specify custom validation messages for attributes using the
	| convention "attribute.rule" to name the lines. This makes it quick to
	| specify a specific custom language line for a given attribute rule.
	|
	*/

	'custom' => array(),

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Attributes
	|--------------------------------------------------------------------------
	|
	| The following language lines are used to swap attribute place-holders
	| with something more reader friendly such as E-Mail Address instead
	| of "email". This simply helps us make messages a little cleaner.
	|
	*/

	'attributes' => array(
		'name' => 'nombre',
		'nit' => 'NIT',
		'lapse' => 'lapso',
		'period' => 'periodo',
		'quantity' => 'cantidad',
		'price' => 'precio',
		'type' => 'tipo',
		'price_1' => 'precio 1',
		'price_2' => 'precio 2',
		'product' => 'producto',
		'recipient_1' => 'copia 1',
		'recipient_2' => 'copia 2',
		'text' => 'texto',
		'title' => 'titulo',
		),

);
