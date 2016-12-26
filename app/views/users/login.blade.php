<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="http://BrandSpa.com">
	<title>Optima - login</title>
	<!-- STYLES -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style>
	
	body {
			background: url('img/background.png');
			background-size: cover;
			background-repeat: no-repeat;
    background-attachment: fixed;
			padding-top: 40px;
			padding-bottom: 40px;
		}
	

		.form-signin {
			max-width: 330px;
			padding: 15px;
			margin: 0 auto;
		}
		.form-signin .form-signin-heading,
		.form-signin .checkbox {
			margin-bottom: 10px;
		}
		.form-signin .checkbox {
			font-weight: normal;
		}
		.form-signin .form-control {
			position: relative;
			font-size: 16px;
			height: auto;
			padding: 10px;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}
		.form-signin .form-control:focus {
			z-index: 2;
		}
		.form-signin input[type="text"] {
			margin-bottom: -1px;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
		.form-signin input[type="password"] {
			margin-bottom: 10px;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}

		.container{
			text-align: center;
		}
	</style>
</head>
<body>

	<div class="container">
		
		<img src="[[ asset('/img/logo-home.png') ]]" alt="">
		<form  action="/login"  method="POST" class="form-signin">

			<input type="text" name="email" class="form-control" placeholder="Email" autofocus>
			<input type="password" name="password" class="form-control" placeholder="Contraseña">

			<button class="btn btn-lg btn-warning btn-block" type="submit">Ingresar</button>
		</form>

	</div> <!-- /container -->

</head>
<body>
	
	