$(function(){

	var quotations = {};

	quotations.init = function() {
		var documentBody = $(document.body);
		documentBody.on('click', '.quotation-duplicate', quotations.duplicate);
		documentBody.on('click', '.quotation-comment', quotations.comment);
		documentBody.on('click', '.quotation-comment-store', quotations.storeComment );
		documentBody.on('change', '.quotation-search', quotations.search );
		documentBody.on('click', '.quotation-edit', quotations.edit);
		documentBody.on('click', '.quotation-mail', quotations.sendMail);
		documentBody.on('click', '.quotation-update', quotations.update);
	}

	/*
	|-------------------------------------------------------------------------
	|	quotation send mail
	|-------------------------------------------------------------------------
	*/

	quotations.sendMail = function(evt) {
		evt.preventDefault();

		that = $(this);
		id = that.data('quotationId');

		workResponse = function(object){
			console.log("ok");
			that.text('enviado');
			alertify.success('Cotización enviada');
		};

		$.post('/quotations/'+id+'/sendmail').done(workResponse);
	}


	/*
	|-------------------------------------------------------------------------
	|	quotation edit
	|-------------------------------------------------------------------------
	*/

	quotations.edit = function(evt) {
		evt.preventDefault();

		that = $(this);
		container = $("#mail-edit");
		template = Handlebars.compile($('#email-edit-template').html());
		quotationId = that.data('quotationId');

		workResponse = function(object){
			container.find('.modal-body').html(template(object));
			container.modal();
		};

		$.get('/api/v1/quotations/'+quotationId).done(workResponse);
	}

	/*
	|-------------------------------------------------------------------------
	|	quotation update
	|-------------------------------------------------------------------------
	*/
	quotations.update = function(evt) {
		evt.preventDefault();

		that = $(this);
		data = that.parent().serialize();
		id = that.data('quotationId');

		workResponse = function(object){
			if (object.created_at) {
				alertify.success('Cotización actualizada');
			} else {
				$.each(object, function(key, val){
					alertify.error(val);
				});
			}
		}

		$.ajax({url:'/quotations/'+id, type: 'PUT', data: data}).done(workResponse);
	}

	/*
	|-------------------------------------------------------------------------
	|	quotation duplicate
	|-------------------------------------------------------------------------
	*/
		quotations.duplicate = function(evt) {
			evt.preventDefault();
			that = $(this);
			id = that.data('quotationId');

			workResponse = function(quotationId) {
				window.location.href = "/quotations/"+quotationId;
			};

			$.post('/quotations/replicate/'+id).done(workResponse);
		}
	/*
	|-------------------------------------------------------------------------
	|	quotation comment
	|-------------------------------------------------------------------------
	*/
		quotations.comment = function(evt) {
			evt.preventDefault();
			that = $(this);
			template = Handlebars.compile($('#quotation-comment-template').html());
			container = $('#quotation-comment');
			id = that.data('quotationId');

			workResponse = function(object) {
				container.find('.modal-dialog').css("width", "70%");
				container.find('.modal-body').html(template(object));
				container.modal();

			};

			$.get('/api/v1/quotations/'+id).done(workResponse);
		}
	/*
	|-------------------------------------------------------------------------
	|	quotations store comment
	|-------------------------------------------------------------------------
	*/
		quotations.storeComment = function(evt) {
			evt.preventDefault();
			that = $(this);
			id = that.data('quotationId');
			data = that.parent().serialize();

			workResponse = function(object) {
				$('#quotation-comment').modal('hide');
				alertify.success('Comentario guardado');
			};

			$.ajax({url: '/quotations/'+id, type: 'PUT', data: data}).done(workResponse);
		}

	/*
	|-------------------------------------------------------------------------
	|	quotations search
	|-------------------------------------------------------------------------
	*/
		quotations.search = function(evt) {
			evt.preventDefault();

			that = $(this);
			template = Handlebars.compile($("#quotations-result-template").html());
			container = $('.quotations-result');
			type = $(document.body).find("input[type='radio'][name='type']:checked").val();
			query = $(document.body).find('.quotation-search').val();

			workResponse = function(object) {
				if (type == "quotation") {
					container.html(template({quotations: object}))
				} else if(type == "company") {
					 container.html(template({companies: object}))
				} else {
					 container.html(template({contacts: object}))
				}
			};

			if (type) {
				$.get("/api/v1/quotations/search/"+type+"/"+query).done(workResponse);
			} else {
				alertify.error('seleccione tipo de busqueda');
			}
		}

	new quotations.init;
});
