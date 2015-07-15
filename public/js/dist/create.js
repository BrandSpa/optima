var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.TrackingCreateView = (function(superClass) {
    extend(TrackingCreateView, superClass);

    function TrackingCreateView() {
      return TrackingCreateView.__super__.constructor.apply(this, arguments);
    }

    TrackingCreateView.prototype.el = $('#tracking-create-modal');

    TrackingCreateView.prototype.template = $('#tracking-create-template');

    TrackingCreateView.prototype.events = {
      'click .tracking-save-store': 'store',
      'click .modal-close': 'cancel'
    };

    TrackingCreateView.prototype.initialize = function() {
      this.listenTo(this.model, 'sync', this.stored);
      this.listenTo(this.model, 'error', this.showErrors);
      return this.id = optima.pathArray[2];
    };

    TrackingCreateView.prototype.addPlugins = function() {
      var hiddenName;
      $(this.el).find('.datepicker').pickadate({
        formatSubmit: 'yyyy/mm/dd'
      }, hiddenName = true);
      return $(this.el).find('.timepicker').pickatime({
        min: [6, 0],
        max: [20, 0],
        interval: 5,
        formatSubmit: 'HH:i'
      }, hiddenName = true);
    };

    TrackingCreateView.prototype.render = function(contacts) {
      var template;
      template = optima.templates.tracking_create;
      $(this.el).find('.modal-content').html(template(contacts));
      this.addPlugins();
      return $(this.el).modal({
        backdrop: 'static'
      });
    };

    TrackingCreateView.prototype.store = function(e) {
      var dataForm;
      e.preventDefault();
      dataForm = $(this.el).find('form').serializeJSON();
      dataForm['quotation_id'] = optima.pathArray[2];
      dataForm['register_date'] = dataForm['register_date_submit'];
      dataForm['register_time'] = dataForm['register_time_submit'];
      return this.model.save(dataForm, {
        wait: true
      });
    };

    TrackingCreateView.prototype.stored = function(model) {
      var diff, now;
      if (model.id) {
        console.log(model);
        optima.trackings.add(model);
        console.log(optima.quotation.get('sent_at'));
        now = moment().format();
        diff = moment(now).diff(optima.quotation.get('sent_at'), 'minutes');
        optima.quotation.save({
          status: 'Seguimiento',
          sent_confirmed_diff: diff
        });
        this.storeActivity(this.id, "Agrego un registro");
        socket.emit("trackings", this.id);
        return this.closeModal();
      }
    };

    TrackingCreateView.prototype.cancel = function(e) {
      e.preventDefault();
      return this.closeModal();
    };

    return TrackingCreateView;

  })(Backbone.View);
});
