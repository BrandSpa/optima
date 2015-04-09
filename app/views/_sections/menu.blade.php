<div id="sidr" >
<h2>Menu</h2>
  <!-- Your content -->
  <ul>
    <li><a href="/companies/create">Nueva Cotización</a></li>
    <li class="divider"></li>
    [[ HTML::navlink("/".Request::segment(1), "/quotations", "Cotizaciones") ]]
    <li class="divider"></li>
    [[ HTML::navlink("/".Request::segment(1), "/companies", "Empresas") ]]
    <li class="divider"></li>
    [[ HTML::navlink("/".Request::segment(1), "/contacts", "Contactos") ]]
    <li class="divider"></li>
    <li><a href="/services/create">Servicios</a></li>
    <li class="divider"></li>
    <li><a href="/logout">Cerrar Sesion</a></li>
  </ul>
</div>  