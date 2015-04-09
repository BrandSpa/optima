$(function(){

		var list_processor = [
		'Pentium 4 de 2.5 a 3.4 GHz',
		'Pentium D de 2.33 a 3.4 GHz',
		'Dual Core de 1.8 a 2.5 GHz',
		'Core 2 Duo de 1.8 a 2.4 GHz',
		'Core 2 Duo de 1.8 a 2.6 GHz',
		'Core 2 Duo de 1.8 a 2.8 GHz',
		'Core 2 Quad de 2.33 a 2.66 GHz',
		'Core i3 de 2.5 a 2.9 GHz',
		'Core i5 de 2.66 a 3.2 GHz',
		'Core i5 de 2.0 a 2.4 GHz',
		'Core i7 de 2.00 a 2.66 GHz',
		'Atom de 1.6 GHz',
		'Dual Core de 1.5 GHz',
		'Core 2 Duo de 1.5 a 2.0 GHz',
		'Core 2 Duo de 1.6 a 2.0 GHz',
		'Core i3 de 1.6 a 2.0 GHz',
		'Core i5 de 1.6 a 2.0 GHz',
		'Core i5 de 1.6 a 2.46 GHz',
		'Core i7 de 1.6 a 2.0 GHz',
		'Dual Core de 1 GHz',
		'Xeon Dual Core de 2.33 GHz',
		'Xeon Dual de 3.2 GHz',
		'Xeon Quad Core de 1.6 a 2.5 GHz',
		'Xeon Quad Core de 2.5 GHz - E5420',
		'Xeon Quad Core de 1.6 a 2.5 GHz',
		'Xeon Quad Core de 2.4 GHz',
		'Xeon Quad Core de 1.6 a 2.5 GHz',
		'Xeon Six Core de 1.5 a 2.66 GHz'
		];

		list_ram = [
		'512 MB',
		'1 GB',
		'2 GB',
		'3 GB',
		'4 GB',
		'6 GB',
		'8 GB',
		'10 GB',
		'12 GB',
		'14 GB',
		'16 GB',
		'24 GB'
		];

		list_hdd = [
		'40Gb',
		'80gb',
		'120gb',
		'160gb',
		'250gb',
		'320gb',
		'500gb',
		'1 TB',
		'2 TB',
		'3 TB',
		'73 GB (SCSI)',
		'146 GB (SCSI)',
		'200 - 500 GB (SATA) No Hot Swap',
		'500 GB (SATA) Hot Swap',
		'1 TB (SATA)',
		'73 GB (SAS)',
		'146 GB (SAS)',
		'300 GB (SAS)',
		'500 GB (SAS)',
		'600 GB (SAS)'
		];

		list_burner = [
		'52 X',
		'Combo - Lector DVD / Quemador CD',
		'Quemador - DVD',
		'Quemador - DVD (RW)',
		'Blu-Ray'
		];

		list_network_card = [
		'10/100',
		'10/100 e inalámbrica',
		'10/100/100',
		'10/100/100 e inalámbrica'
		];

		list_monitor = [
		'LCD 15',
		'LCD 17',
		'LCD 18',
		'LCD 18.5',
		'LCD 19',
		'LCD 20',
		'LCD 21',
		'LCD 21.5',
		'LCD 22',
		'LCD 23',
		'LCD 24',
		'10.1',
		'12',
		'12.1',
		'13 - 14',
		'13.3 - 14',
		'14',
		'15',
		'15.1',
		'15.4',
		'20'
		];

		list_keyboard = [
		'Teclado - Esp 101/102 teclas Mouse - Óptico',
		'Teclado - Esp 101/102 teclas (USB o PS2) Mouse - Óptico (USB o PS2)'
		];

		list_os = [
		'Windows XP Profesional',
		'Windows 7 Profesional',
		'Windows XP / 7 Profesional',
		'Windows 7 Profesional (64 Bits)',
		'Android 4.0',
		'Formateado'
		];

		list_office = [
		'Office Home and Business (Word, Excel, Power Point, Outlook, One note)',
		'Office Home and Business 2010 (Word, Excel, Power Point, Outlook, One note)',
		'Office Profesional (Word, Excel, Power Point, Outlook, Access)',
		'Office 2007 Profesional (Word, Excel, Power Point, Outlook, Access)',
		'Office 2010 Profesional (Word, Excel, Power Point, Outlook, Access)'
		];

		list_antivirus = [
		'Antivirus Nod 32'
		];

		list_adittional = [
		'Tarjeta de video de 256 MB',
		'Tarjeta de video de 512 MB',
		'Tarjeta de video de 1 GB',
		'Tarjeta de video de 2 GB',
		'Tarjeta de video de 1 GB (incluye convertidor para segundo monitor) ',
		'Monitor 15',
		'Monitor 17',
		'Monitor 18',
		'Monitor 18.5',
		'Monitor 19',
		'Monitor 20',
		'Monitor 21',
		'Monitor 21.5',
		'Monitor 22',
		'Monitor 23',
		'Monitor 24',
		'Disco duro de 120 GB',
		'Disco duro de 250 GB',
		'Disco duro de 500 GB',
		'Disco duro de 1 TB',
		'Disco duro de 2 TB',
		'Disco duro de 3 TB',
		'Tóner nuevo',
		'Tóner re manufacturado',
		'Convertidor USB a Paralelo',
		'Convertidor USB a Serial',
		'Diadema',
		'Teclado USB',
		'Mouse óptico USB',
		'Tarjeta de red inalámbrica',
		'Puertos USB ',
		'1 Puerto LPT',
		'1 Puerto Paralelo',
		'1 Puerto Serial',
		'1 Puerto VGA',
		'1 Puerto HDMI',
		'Puerto de red',
		'Dúplex',
		'Maletín',
		'Cámara web integrada',
		'Guaya',
		'Maletín / Cámara web integrada',
		'Maletín / Cámara web integrada / Guaya',
		'Maletín / Cámara web integrada / Mouse óptico USB',
		'Bluetooth',
		'Tóner nuevo (un (1) tóner mensual)',
		'Tóner re-manufacturado (un (1) tóner mensual)',
		'Smart array integrado (Permite arreglo raid 0 y 1  a partir de 2 discos duros físicos y arreglo raid 5 a partir de 3 discos duros físicos)',
		'Bandeja alimentadora'
		];


	/*
	|-------------------------------------------------------------------------
	| products typeahead
	|-------------------------------------------------------------------------
	*/
	$(document).on('focus', 'input[name="processor"]', function(evt) {
		$(this).autocomplete({
			source: list_processor,
			minLength: 2
		});
	});

	$(document).on('focus', 'input[name="ram"]', function(evt) {
		$(this).autocomplete({source: list_ram});
	});

	$(document).on('focus', 'input[name="monitor"]', function(evt) {
		$(this).autocomplete({source: list_monitor});
	});

	$(document).on('focus', 'input[name="keyboard"]', function(evt) {
		$(this).autocomplete({source: list_keyboard});
	});

	$(document).on('focus', 'input[name="hdd"]', function(evt) {
		$(this).autocomplete({source: list_hdd});
	});

	$(document).on('focus', 'input[name="burner"]', function(evt) {
		$(this).autocomplete({source: list_burner});
	});

	$(document).on('focus', 'input[name="network_card"]', function(evt) {
		$(this).autocomplete({source: list_network_card});
	});

	$(document).on('focus', 'input[name="os"]', function(evt) {
		$(this).autocomplete({source: list_os});
	});

	$(document).on('focus', 'input[name="office"]', function(evt) {
		$(this).autocomplete({source: list_office});
	});

	$(document).on('focus', 'input[name="antivirus"]', function(evt) {
		$(this).autocomplete({source: list_antivirus});
	});

	$(document).on('focus', '.additional', function(evt) {
		$(this).autocomplete({
			source: list_adittional,
			minLength: 2
		});
	});

});
