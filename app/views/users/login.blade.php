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
	
	body, html {
		background: rgba(49,46,129,1);
		background: -moz-linear-gradient(top, rgba(49,46,129,1) 0%, rgba(128,172,218,1) 100%);
		background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(49,46,129,1)), color-stop(100%, rgba(128,172,218,1)));
		background: -webkit-linear-gradient(top, rgba(49,46,129,1) 0%, rgba(128,172,218,1) 100%);
		background: -o-linear-gradient(top, rgba(49,46,129,1) 0%, rgba(128,172,218,1) 100%);
		background: -ms-linear-gradient(top, rgba(49,46,129,1) 0%, rgba(128,172,218,1) 100%);
		background: linear-gradient(to bottom, rgba(49,46,129,1) 0%, rgba(128,172,218,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#312e81', endColorstr='#80acda', GradientType=0 );
		background-size: cover;
		background-repeat: no-repeat;
    background-attachment: fixed;
		padding-top: 40px;
		padding-bottom: 40px;
		height: 100%;
	}
		.container {
			flex-direction: column;
			display: flex;
  		align-items: center;
  		justify-content: center;
		}
		.form-signin {
			max-width: 300px;
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
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			height: 50px;
			border-radius: 50px;
			color: #fff;
			border: none;
			background: rgba(0,0,0, .2);
			margin-bottom: 25px;
			box-shadow: none;
			text-align: center;
		}

		.form-signin .form-control:focus {
			z-index: 2;
		}


		.container{
			text-align: center;
		}

		.btn {
			height: 50px;
			border-radius: 50px;
			color: #fff;
			border: none;
			background: #fff;
			margin-bottom: 25px;
			box-shadow: none;
			color: #718DCD;
			text-align: center;
		}

		.logo {
			margin-bottom: 60px;
		}
	</style>
</head>
<body>

	<div class="container">
	<div class="vertical">
		<img src="[[ asset('/img/logo.png') ]]" alt="" class="logo">
		<form  action="/login"  method="POST" class="form-signin">

			<input type="text" name="email" class="form-control" placeholder="Usuario" autofocus>
			<input type="password" name="password" class="form-control" placeholder="Contraseña">

			<button class="btn btn-lg btn-warning btn-block" type="submit">Ingresar</button>
		</form>

	</div>
		
		
	</div> <!-- /container -->

</head>
<body>
	
	