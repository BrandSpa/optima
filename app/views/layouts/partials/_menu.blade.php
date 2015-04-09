<div id="sidr" >
<h2>Menu</h2>
  <!-- Your content -->
  <ul>
  	<li>
  		[[ Auth::user()->name ]] [[ Auth::user()->lastname ]]
  	</li>
    <li class="divider"></li>
    [[ HTML::navlink("/".Request::segment(1), "/", "Dashboard") ]]
    <li class="divider"></li>
    [[ HTML::navlink("/".Request::segment(1), "/companies", "Empresas") ]]
    <li class="divider"></li>
    [[ HTML::navlink("/".Request::segment(1), "/contacts", "Contactos") ]]
    <li class="divider"></li>
    <li><a href="/services">Servicios</a></li>
    <li class="divider"></li>
    <li><a href="/results">Resultados</a></li>
    
    <li><a href="/logout">Cerrar Sesion</a></li>
  </ul>
</div>  