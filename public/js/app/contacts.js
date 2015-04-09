$(function(){
	var contacts = {

	init : function() {
		var documentBody = $(document.body);
		documentBody.on('click', '.contact-store', contacts.store);
		documentBody.on('click', '.contact-edit', contacts.edit);
		documentBody.on('click', '.contact-update', contacts.update);
		documentBody.on('click', '.contact-select', contacts.select);
		documentBody.on('change','.contact-search', contacts.search);
		$(document).on('focus', '.recipient', contacts.getByCompany);

		if (window.location.pathname == "/contacts/create") {
				$('.progress-bar').css('width', '60%');
			};
	},

	getByCompany: function(evt) {
		var $el = $(this);
		workResponse = function(object){
			var mails = [];
			$.each(object, function(key, val) {
				mails.push(val.email);
			});
			$el.autocomplete({source: mails});
		};

		$.get('/companies/contacts').done(workResponse);
	},

	store : function(evt){
		evt.preventDefault();
		that = $(this);
		data = that.parent().serialize();

		workResponse = function(object){
			if (object.created_at) {
				window.location.href = "/quotations/".object.id;
			}else{
				$.each(object, function(index, key){
					alertify.error(key);
				});
				that.text('Siguiente');
			}
		};

		$.post('/contacts', data).done(workResponse);
	},


	edit: function(evt){
		evt.preventDefault();

		that = $(this);
		template = Handlebars.compile($("#contact-edit-template").html());
		container = $("#contact-edit");
		id = that.data('contactId');

		workResponse = function(object) {
			container.find('.modal-body').html(template(object));
			container.modal({backdrop: 'static'});
		};

		$.get('/api/v1/contacts/'+id).done(workResponse);
	},

	update : function(evt){
		evt.preventDefault();

		that = $(this);
		id = that.data('contactId');
		container = $('.contacts-list').find('[data-contact-id="'+id+'"]').parents('tr');
		template = Handlebars.compile($('#contact-updated-template').html());
		data = that.parent().serialize();

		workResponse = function(object) {
			if (object.created_at) {
				container.html(template(object));
				alertify.success('Contacto actualizada');
				$("#contact-edit").modal('hide');
			}else{
				$.each(object, function(index, key){
					alertify.error(key);
				});
			}
		};

		$.ajax({url:'/api/v1/contacts/'+id, type:'PUT', data:data}).done(workResponse);
	},

	select : function(evt){
		evt.preventDefault();

		that = $(this);
		contactId = that.data('contactId');
		companyId = that.data('contactId');

		workResponse = function(object) {
			console.log(object.id);
			//window.location.href = "/products/create";
			return false;
		};

		if (window.window.location.pathname == "/contacts" || window.window.location.pathname == "/") {
				$.post('/companies/session/'+companyId);
				$.post('/contacts/session/'+contactId).done(workResponse);
		};
		if (window.location.pathname == "/contacts/create") {
			$.post('/contacts/session/'+contactId).done(workResponse);
		}
	},

	search : function(evt) {
		evt.preventDefault();

		that = $(this);
		template = Handlebars.compile($('#contact-result-template').html());
		query = that.val();

		workResponse = function(object) {
			$('.contacts-result').html(template({contacts: object}));
		};

		$.get('/api/v1/contacts/search/'+query).done(workResponse);
	}

	} // end contacts object

	new contacts.init;

});


