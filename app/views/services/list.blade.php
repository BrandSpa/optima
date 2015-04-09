 <script type="text/x-handlebars-template" id="services-list-template">
	<div class="table-responsive">
	<table class="table">
	{{#each []}}
		<tr>
			<td><a href="#" class="service-edit" data-service-id="{{id}}">{{ title }}</a></td>
			<td>
        <div class="btn-group">
          <button class="btn btn-primary btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#" class="service-remove" data-service-id="{{id}}">Eliminar</a>
            </li>
          </ul>
        </div>
      </td>
		</tr>
		{{/each}}
	</table>
</div>
</script>

