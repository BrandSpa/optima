<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Optima by Avante</title>
	<!-- STYLES -->
  <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700' rel='stylesheet' type='text/css'>
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="/css/dist/app.css">
</head>

<body id="optima-app">
	<nav class="navbar top-bar navbar-fixed-top">
		<a href="#sidr" class="navbar-brand open-menu"><img src="[[asset('img/logo-home.png')]]" class="img-responsive"></a>
		<div class="container">
			<ul class="nav navbar-nav">
				<li class="hidden-lg">
					<a class="navbar-toggle open-menu"  href="#sidr">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</a>
				</li>
			</ul>
		</div>
	</nav>

	<!-- Menu -->
	<div class="hidden-sm hidden-xs" id="sidebar-nav">
	    <ul>
		    <li class="user-link">[[ Auth::user()->name ]] [[ Auth::user()->lastname ]]</li>
		    <li><a href="/">Dashboard</a></li>
		    <li><a href="/companies">Empresas</a></li>
		    <li><a href="/contacts">Contactos</a></li>
		    <li><a href="/services">servicios</a></li>
		    <li><a href="/results">Resultados</a></li>
		    <li><a href="/logout">Cerrar Sesion</a></li>
	    </ul>
	</div>

<section id="main-content">

	@yield('content')

  <div class="hide-menu hide">
    <div id="sidr" >
	<h2>Menu</h2>
	<!-- Your content -->
	<ul>
		<li class="user-link">[[ Auth::user()->name ]] [[ Auth::user()->lastname ]]</li>
		<li class="divider"></li>
		<li><a href="/">Dashboard</a></li>
		<li class="divider"></li>
		<li><a href="/companies">Empresas</a></li>
		<li class="divider"></li>
		<li><a href="/contacts">Contactos</a></li>
		<li class="divider"></li>
		<li><a href="/services">servicios</a></li>
		<li class="divider"></li>
		<li><a href="/results">Resultados</a></li>
		<li class="divider"></li>
		<li><a href="/logout">Cerrar Sesion</a></li>
	</ul>
</div>
  </div>

</section>

<div class="modal fade" id="company-quote-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>

<div class="modal fade" id="contact-quote-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>

<script src="/js/dist/dependencies.js"></script>
<script src="/js/app/helpers.js"></script>
<script src="/js/helpers/helper-compare.js"></script>
<script src="/js/helpers/backbone_helpers.js"></script>

 <script src="/js/app/menu.js"></script>
 <script src="/js/main.js"></script>

  <script>
	  optima.user_id = [[ Auth::user()->id ]];
	  optima.user_email = "[[ Auth::user()->email ]]";
  </script>

  <script src="/js/dist/templates.js"></script>
 <script src="/js/helpers/handlebars_partials.js"></script>

  <script src="/js/sockets.js"></script>
  <script src="/js/dist/app.js"></script>

   <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-42534064-5', 'auto');
    ga('send', 'pageview');
  </script>
</body>

</html>
