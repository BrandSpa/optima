var cleanForm = function(form)
	{
		form.find('input[type=text]').val('');
		form.find('textarea').val('');
	}

var compiled = function(source) {
	$source = source.html();
	template = Handlebars.compile($); 
	return template;
}


