$ ->
  class optima.views.CompanyContacts extends Backbone.View
    el: $ '#company-contacts-modal'
    
    render: (model) ->
      template = optima.templates.company_contacts
      $(@el).find('.modal-content').html template( model.toJSON() )
      $(@el).modal()