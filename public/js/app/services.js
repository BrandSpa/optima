$(function(){

	var services = {

	init: function() {
		var documentBody = $(document.body);
		documentBody.on('click', '.service-store', this.store);
		documentBody.on('click', '.service-add', this.add);
		documentBody.on('click', '.service-attach', this.attach);

		documentBody.on('click', '.service-edit', this.edit);
		documentBody.on('click', '.service-update', this.update);

		documentBody.on('click', '.service-edit-prices', this.editPrices);
		documentBody.on('click', '.service-update-prices', this.updatePrices);
		documentBody.on('click', '.service-delete', this.detach);
		documentBody.on('click', '.service-remove', this.delete);

		if (window.location.pathname == "/services/create") {
			this.list();
			$('.summernote').summernote();
		}
	},

	store : function(evt) {
		evt.preventDefault();

		that = $(this);
		data = that.parent().serialize();
		data['text'] = that.find('.service-text').code();

		workResponse = function(object) {
			if (object.id) {
				alertify.success("servicio guardado");
			} else {
				$.each(object, function(index, key){
					alertify.error(key);
				});
			}
		};

		$.post('/services', data).done(workResponse);
	},

	list : function() {

		template = Handlebars.compile($('#services-list-template').html());
		container = $(document.body).find('.services-list');

		workResponse = function(object){
			container.find('.panel-body').html(template(object));
		};

		$.get('/api/v1/services').done(workResponse);
	},

	add : function(e) {
		e.preventDefault();

		container = $('#service-create').find('.modal-body');
		$template = Handlebars.compile($('#services-create-template').html());

		workResponse = function(object){
			container.html($template(object));
			$('#service-create').modal({backdrop: 'static'});
		};

		$.get('/api/v1/services').done(workResponse);
	},

	attach : function(evt){
		evt.preventDefault();
		that = $(this);

		id = that.parent().find('select[name="title"]').val();
		container = $('.services-added').find('tbody');
		template = Handlebars.compile($('#services-added-template').html());

		workResponse = function(object){
			container.append(template(object));
			$('#service-edit').modal('hide');
			alertify.success('Servicio agregado');
		};

		$.post('/quotations/services/'+id).done(workResponse);
	},

	edit : function(evt){
		evt.preventDefault();

		that = $(this);
		template = Handlebars.compile($("#service-edit-template").html());
		container = $('#service-edit');
		id = that.data('serviceId');

		workResponse = function(object){
			container.find('.modal-body').html(template(object));

			$(document.body).find('.textarea-edit').wysihtml5({
				"font-styles": false,
				"link": false,
				"image": false,
				"emphasis": false
			});

			container.modal();
		};

		$.get('/api/v1/services/'+id).done(workResponse);

	},

	update : function(evt) {
		evt.preventDefault();

		that = $(this);
		id = that.data('serviceId');
		data = that.parent().serialize();
		updated = that.parent().find('[name="updated_at"]').val();

		workResponse = function(object) {
			if (object.updated_at) {
				alertify.success('Servicio actualizado');
				$('#service-edit').modal('hide');
			} else {
				$.each(object, function(key, val) {
					alertify.error(val);
				});
			}
		};

		$.ajax({url:'/services/'+id, type:'PUT', data:data}).done(workResponse);

	},

	editPrices : function(evt){
		evt.preventDefault();

		that = $(this);
		template = Handlebars.compile($("#service-edit-prices-template").html());
		container = $('#service-edit-prices');
		id = that.data('serviceId');

		workResponse = function(object){
			container.find('.modal-body').html(template(object));
			container.modal();
		};

		$.get('/api/v1/services/'+id).done(workResponse);
	},

	updatePrices : function(evt){
		evt.preventDefault();

		that = $(this);
		template = Handlebars.compile($("#service-updated-template").html());
		container = $(document).find('[data-id="'+id+'"]').parent().parent();
		id = that.data('serviceId');
		data = that.parent().serialize();

		workResponse = function(object){

			if (object.created_at) {
				container.html(template(object));
				$('#service-edit-prices').modal('hide');
				alertify.success('Precios actualizados');

			} else {
				$.each(object, function(index, key){
					alertify.error(key);
				});
			}
		};

		$.post('/services/'+id+'/update', data).done(workResponse);
	},


	detach : function(evt){
		evt.preventDefault();
		that = $(this);
		id = that.data('serviceId');

		workResponse = function(){
			that.parents('tr').remove();
			alertify.error('Servicio eliminado');
		};

		$.post('/quotations/services/'+id+'/delete').done(workResponse);
	},

	delete: function(evt){
		evt.preventDefault();

		that = $(this);
		id = that.data('serviceId');

		workResponse = function(){
			that.parent().parent().remove();
			alertify.error('Servicio eliminado');
		};

		$.ajax({url:'/services/'+id, type:'DELETE'}).done(workResponse);
	}


	};

	services.init();
});