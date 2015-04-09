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
  @include('layouts/partials/_nav')
	<!-- Menu -->
	<div class="hidden-sm hidden-xs" id="sidebar-nav">
	    <ul>
	    <li class="user-link">[[ Auth::user()->name ]] [[ Auth::user()->lastname ]]</li>
	      [[ HTML::navlink("/".Request::segment(1), "/", "Dashboard") ]]
	      [[ HTML::navlink("/".Request::segment(1), "/companies", "Empresas") ]]
	      [[ HTML::navlink("/".Request::segment(1), "/contacts", "Contactos") ]] 
	      [[ HTML::navlink("/".Request::segment(1), "/services", "Servicios") ]]
	      [[ HTML::navlink("/".Request::segment(1), "/results", "Resultados") ]]
	      <li><a href="/logout">Cerrar Sesion</a></li>
	    </ul>
	</div>

<section id="main-content">
	@yield('content')
  <div class="hide-menu hide">
    @include('layouts/partials/_menu')
  </div>

</section>

  @include('companies/partials/_quote')
  @include('companies/partials/_search_result')
  @include('contacts/partials/_quote')
  @include('contacts/partials/_company_contact')
  @include('quotations/partials/_quotations_template')
 
<script src="/js/dist/dependencies.js"></script>
<script src="/public/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="/public/vendor/bootstrap-datepicker/js/locale/bootstrap-datepicker.es.js"></script>
<script src="/js/app/helpers.js"></script>
<script src="/js/helpers/helper-compare.js"></script>
<script src="/js/helpers/backbone_helpers.js"></script>

 <script src="/js/app/menu.js"></script>
 <script src="/js/main.js"></script>

  <script>
	  optima.user_id = [[ Auth::user()->id ]];
	  optima.user_email = "[[ Auth::user()->email ]]";
	  optima.mail_api_url = "http://192.241.251.220:3000/sendmail";
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

