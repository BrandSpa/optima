$ ->
  class optima.views.TrackingCreateView extends Backbone.View
    el: $ '#tracking-create-modal'
    template: $ '#tracking-create-template'
    events:
      'click .tracking-save-store' : 'store'
      'click .modal-close' : 'cancel'

    initialize: ->
      @listenTo(@model, 'sync', @stored)
      @listenTo(@model, 'error', @showErrors)
      @id = optima.pathArray[2]

    addPlugins: ->
      $(@el).find('.datepicker').pickadate formatSubmit: 'yyyy/mm/dd', hiddenName = true
      $(@el).find('.timepicker').pickatime min: [6,0], max: [20,0], interval: 5, formatSubmit: 'HH:i', hiddenName = true
      
    render: (contacts) ->
      template = optima.templates.tracking_create
      $(@el).find('.modal-content').html template( contacts )
      @addPlugins()
      $(@el).modal backdrop: 'static'
           
    store: (e) ->
      e.preventDefault()
      dataForm = $(@el).find('form').serializeJSON()
      dataForm['quotation_id'] = optima.pathArray[2]
      dataForm['register_date'] = dataForm['register_date_submit']
      dataForm['register_time'] = dataForm['register_time_submit']
      @model.save dataForm, wait: true
    
    stored: (model) ->
      if model.id
        console.log model
        optima.trackings.add(model)
        console.log optima.quotation.get('sent_at')
        now = moment().format()
        diff = moment(now).diff(optima.quotation.get('sent_at'), 'minutes')
        optima.quotation.save status: 'Seguimiento', sent_confirmed_diff: diff
        @storeActivity @id, "Agrego un registro"
        socket.emit "trackings", @id
        @closeModal()

    cancel: (e) ->
      e.preventDefault()
      @closeModal()
  #todos