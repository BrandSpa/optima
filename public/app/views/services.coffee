$ ->
  
  class optima.views.ServiceView extends Backbone.View
    tagName: 'tr'

    events:
      'click .service-open-edit': 'openEdit'
      'click .service-delete': 'delete'

    initialize: ->
      @render()
      @listenTo(@model, 'change', @render)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.service
      $(@el).html template( @model.toJSON() )
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.views.ServiceEdit model: @model
      edit.render()
    
    delete: (e) ->
      e.preventDefault()
      @model.destroy()
      @remove()

  class optima.views.ServicesView extends Backbone.View
    el: $ '#services'
    events:
      'click .service-see-more' : 'seeMore'
      'click .service-open-create': 'openCreate'
      'submit .service-search' : 'search'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @addOne, @)

    addOne: (model) ->
      view = new optima.views.ServiceView model: model
      $(@el).find('table .thead').after view.render().el

    render: ->
      @collection.each (model) ->
        view = new optima.views.ServiceView model: model
        $(@el).find('table').append view.render().el
        $(@el).find('.table-responsive').slimScroll
            height: '400px'
      , @

    seeMore: (e) ->
      e.preventDefault()
      el = e.currentTarget
      offset = $(el).data('offset')
      more = (offset + 10)
      @collection.fetch data: offset: more
      $(el).data('offset', more)
      
    openCreate: (e) ->
      e.preventDefault()
      view = new optima.views.ServiceCreate model: new optima.models.Service
      view.render()
      
    search: (e) ->
      e.preventDefault()
      query = $('.service-query').val()
      @collection.fetch data: query: query

  class optima.views.ServiceCreate extends Backbone.View
    el: $ '#service-create-modal'

    events:
      'click .service-create-store' : 'store'
      'click .modal-close' : 'closeModal'

    initialize: ->
      @listenTo(@model, 'sync', @stored)
      @listenTo(@model, 'error', @showErrors)

    render: ->
      template = optima.templates.service_create
      $(@el).find('.modal-content').html template( @model.toJSON() )
      optima.summernote(@el)
      $(@el).modal({backdrop: 'static'})
      
    store: (e) ->
      e.preventDefault()
      dataForm = $(@el).find('form').serializeJSON()
      dataForm['text'] = $(@el).find('form [name="text"]').code()
      @model.save dataForm, wait: true
    
    stored: (model) ->
      if model.id
        optima.services.add(model)
        @closeModal()

  class optima.views.ServiceEdit extends Backbone.View
    el: $ '#service-edit-modal'

    events:
      'click .service-save-update': 'update'
      'click .modal-close': 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @synced)

    render: ->
      template = optima.templates.service_edit
      $(@el).find('.modal-content').html template( @model.toJSON() )
      optima.summernote(@el)
      $(@el).modal({backdrop: 'static'})

    update: (e) ->
      e.preventDefault()
      el = $(@el)
      dataForm = el.find('form').serializeJSON()
      dataForm['text'] = el.find('form [name="text"]').code()
      @model.save dataForm, wait: true

    synced: (model) ->
      if model.id
        pubsub.trigger('service:update')
        @closeModal()

    cancel:(e) ->
      e.preventDefault()
      @closeModal()

  class optima.views.QuotationServiceView extends Backbone.View
    template: $ '#quotation-service-template'
    tagName: 'tr'
    events: 
      'click .quotation-service-detach': 'detach'
      'click .service-open-edit': 'openEdit'

    initialize: ->
      @listenTo(@model, 'change', @render)
      pubsub.on('service:update', @notifyUpdate, @)
      @quotation_id = optima.pathArray[2]

    notifyUpdate: ->
      socket.emit "quotation-service", @quotation_id
      @storeActivity @quotation_id, "edito un servicio"
      
    render: ->
      template = optima.templates.quotation_service
      $(@el).html template( @model.toJSON() )
      @

    openEdit: (e) ->
      e.preventDefault()
      edit = new optima.views.ServiceEdit model: @model
      edit.render()

    detach: (e) ->
      e.preventDefault()
      
      id = @model.get('id')
      $.ajax
        method: 'DELETE'
        url: "/api/v1/services/#{id}"
        data: quotation_id: @quotation_id
      socket.emit "quotation-service", @quotation_id
      @storeActivity @quotation_id, "elimino un servicio"
      @remove()

  class optima.views.QuotationServicesView extends Backbone.View
    el: $ '#quotation-services'
    events: 
      'click a.quotation-product-open-create': 'openCreate'
      'click a.quotation-service-attach': 'attach'

    initialize: ->
      @listenTo(@collection, 'reset', @render)
      @listenTo(@collection, 'add', @add, @)
      @quotation_id = optima.pathArray[2]

      pubsub.on("services:pull", @getMore, @)

    getMore: (id) ->
      _.delay @pull(id), 3000

    pull: (id) ->
      @collection.fetch reset: true, data: quotation_id: id
 
    add: (model) ->
      view = new optima.views.QuotationServiceView model: model
      $(@el).find('table').append view.render().el

    render: ->
      table = $(@el).find('table')
      table.empty()
      @collection.each (model) ->
        view = new optima.views.QuotationServiceView model: model
        table.append view.render().el
      , @

    openCreate: (e) ->
      e.preventDefault()
      view = new optima.views.QuotationServiceCreate
      view.render()

    attach: (e) ->
      e.preventDefault()
      service_id = $('#quotation-service-list').find('select').val()
      @collection.create quotation_id: @quotation_id, service_id: service_id, {success: @notify}
      @storeActivity @quotation_id, "agrego un servicio"
      
    notify: (res)->
      socket.emit "quotation-service", res.toJSON().quotation_id
     

  class optima.views.QuotationServiceCreate extends Backbone.View
    el: $ '#quotation-service-create-modal'
    template: $ '#quotation-service-create-template'
    events:
      'submit #service-search-form': 'search'
      'click .modal-close': 'close'

    render: (quotation_id) ->
      data = {quotation_id: quotation_id}
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).find('.modal-content').html template( data )
      $(@el).modal({backdrop: 'static'})    

    search: (e) ->
      e.preventDefault()
      query = $('.service-query').val()
      collection = new optima.collections.Services
      collection.fetch reset: true, data: query: query
      results = new optima.views.ServiceResults collection: collection

    close: (e)->
      e.preventDefault()
      @closeModal()

  class optima.views.ServiceResult extends Backbone.View
    template: $ '#service-result-template'
    tagName: 'tr'
    events:
      'click .quotation-service-attach' : 'attach'

    initialize: ->
      @listenTo(@model, 'sync', @attached)
      @quotation_id = optima.pathArray[2]

    render: ->
      source = $(@template).html()
      template = Handlebars.compile(source)
      $(@el).html template( @model.toJSON() )
      @

    attach: (e) ->
      e.preventDefault()
      service_id = @model.get('id')
      optima.quotationServices.create quotation_id: @quotation_id, service_id: service_id
 
  class optima.views.ServiceResults extends Backbone.View
    el: $ '#quotation-service-create-modal'
    
    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      $(el).find('table').html('')
      el = $(@el)
      @collection.each (model) ->
        view = new optima.views.ServiceResult model: model
        $(el).find('table').append view.render().el

    close: ->
      @remove()

  class optima.views.QuotationServiceSelect extends Backbone.View
    el: $ '#quotation-service-list'

    initialize: ->
      @listenTo(@collection, 'reset', @render)

    render: ->
      template = optima.templates.service_list
      $(@el).html template( @collection.toJSON() )

    
