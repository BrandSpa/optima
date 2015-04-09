$(function(){
	var products = {

	 init : function() {
	 	documentBody = $(document.body);
	 	documentBody.on('click', '.product-add', this.add);
	 	documentBody.on('click','.product-store', this.store);
	 	documentBody.on('click', '.product-edit', this.edit);
	 	documentBody.on('click', '.product-update', this.update);
	 	documentBody.on('click', '.product-detail', this.detail);
	 	documentBody.on('click', '.product-delete', this.delete);
	 	documentBody.on('change', '.select-product-name', this.hideConfig);

	 	if (window.location.pathname == "/products/create") {
				$('.progress-bar').css('width', '90%');
			};
	 },

	/*
	|-------------------------------------------------------------------------
	|	products
	|-------------------------------------------------------------------------
	*/
	add : function(evt){
		evt.preventDefault();
		el = $(this);
		container = $("#product-add");
		template = Handlebars.compile($("#product-edit-template").html());
		container.find('.modal-body').html(template);
		container.modal({backdrop: 'static'});
	},

	/*
	|-------------------------------------------------------------------------
	|	products store
	|-------------------------------------------------------------------------
	*/
	store : function(evt){
		evt.preventDefault();

		that = $(this);
		container = $('.products-added');
		template = Handlebars.compile($('#products-added-template').html());
		data = that.parent().serialize();

		workResponse = function(object){

			that.text('Agregar Producto');

			if (object.created_at) {

				cleanForm(that.parent());
				container.find('tbody').append(template(object));
				$("#product-add").modal('hide');
				alertify.success('Producto agregado');
			} else {
				$.each(object, function(index, key){
					alertify.error(key);
				});
			}
		};

	$.post('/products', data).done(workResponse);

	},

	/*
	|-------------------------------------------------------------------------
	|	Products edit
	|-------------------------------------------------------------------------
	*/
	edit : function(evt){
		evt.preventDefault();

		that = $(this);
		template = Handlebars.compile($("#product-edit-template").html());
		container = $("#product-edit");
		id = that.data('productId');

		workResponse = function(object){
			container.find('.modal-body').html(template(object));
			config = $(document).find('.config');
			name = $(document).find('select[name="name"]').val();

			if (name == "Desktops" || name == "Laptops" || name == "Apple" || name == "Servers") {
				config.fadeIn();
			} else {
				config.hide();
			};

			container.modal({backdrop: 'static'});
		}

		$.get('/api/v1/products/'+id).done(workResponse);
	},

	/*
	|-------------------------------------------------------------------------
	|	products update
	|-------------------------------------------------------------------------
	*/
	update: function(evt){
		evt.preventDefault();

		el = $(this);
		id = el.data('productId');
		container = $('.products-added').find('[data-product-id="'+id+'"]').parents('tr');
		template = Handlebars.compile($('#products-updated-template').html());
		data = el.parent().serialize();

		workResponse = function(object){
			if (object.created_at) {
				container.html(template(object));
				alertify.success('Producto actualizada');
				$("#product-edit").modal('hide');
			}else{
				$.each(object, function(index, key){
					alertify.error(key);
				});
			}
		};
		$.ajax({url:'/products/'+id, type:'PUT', data:data}).done(workResponse);
	},

	/*
	|-------------------------------------------------------------------------
	|	product detail
	|-------------------------------------------------------------------------
	*/
	detail : function(evt){
		evt.preventDefault();

		that = $(this);
		container = $('#product-detail');
		template = Handlebars.compile($("#product-detail-template").html());
		id = that.data('productId');

		workResponse = function(object){
			container.find('.modal-body').html(template(object));
			$('#product-detail').modal('show');
		};

		$.get('/api/v1/products/'+id).done(workResponse);
	},

	/*
	|-------------------------------------------------------------------------
	|	product delete
	|-------------------------------------------------------------------------
	*/

	delete: function(evt){
		evt.preventDefault();

		that = $(this);
		id = that.data('productId');

		workResponse = function(){
			console.log('#product-'+id);
			$('#product-'+id).remove();
			alertify.error('Producto eliminado');
		};

		$.ajax({url:'/products/'+id, type:'DELETE'}).done(workResponse);
	},
	/*
	|-------------------------------------------------------------------------
	|	Hide config
	|-------------------------------------------------------------------------
	*/

	hideConfig : function(evt) {
		evt.preventDefault();

		that = $(this);
		container = $(document).find('.config');
		name = that.val();

		if (name == "Desktops" || name == "Laptops" || name == "Apple" || name == "Servers") {
			container.fadeIn();
		} else {
			container.fadeOut();
		};
	}

	} // end products object

	products.init();
});

