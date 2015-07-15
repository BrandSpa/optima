var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  return optima.views.QuotationComment = (function(superClass) {
    extend(QuotationComment, superClass);

    function QuotationComment() {
      return QuotationComment.__super__.constructor.apply(this, arguments);
    }

    QuotationComment.prototype.el = $('#quotation-comment-modal');

    QuotationComment.prototype.template = $('#quotation-comment-template');

    QuotationComment.prototype.events = {
      'click a.quotation-comment-save': 'save'
    };

    QuotationComment.prototype.initialize = function() {
      return this.id = this.model.get('id');
    };

    QuotationComment.prototype.broadcastChange = function(msg) {
      socket.emit("quotation:change", this.id);
      return this.storeActivity(this.id, msg);
    };

    QuotationComment.prototype.render = function() {
      var t;
      t = optima.templates.quotation_comment;
      $(this.el).find('.modal-content').html(t(this.model.toJSON()));
      $(this.el).modal({
        backdrop: 'static'
      });
      return optima.summernote(this.el);
    };

    QuotationComment.prototype.save = function(e) {
      var comment;
      e.preventDefault();
      comment = $('#quotation-comment-text').code();
      this.model.set({
        comment: comment
      });
      this.model.save();
      this.broadcastChange("agrego un comentario");
      return $(this.el).modal('hide');
    };

    return QuotationComment;

  })(Backbone.View);
});
