<script type="text/x-handlebars-template" id='contact-result-template'>	
<div class="table-responsive">
<table class="table list-companies">
{{#each contacts}}	
	<tr>
		<td><a href="#" data-contact-id="{{id}}" class="contact-edit">{{name}} {{lastname}}</a></td>
	</tr>
	 {{/each}}
</table>
</div>
</script>