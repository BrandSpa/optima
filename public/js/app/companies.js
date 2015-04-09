$(function() {
  var companies;
  companies = {
    $body: $(document.body),
    init: function() {
      this.$body.on("click", ".company-store", this.store);
      this.$body.on("change", ".companies-search", this.search);
      this.$body.on("click", ".company-edit", this.edit);
      this.$body.on("click", ".company-update", this.update);
      this.$body.on("click", ".company-select", this.select);
      if (window.location.pathname === "/companies/create") {
        return $(".progress-bar").css("width", "30%");
      }
    },
    store: function(evt) {
      var data, that, workResponse;
      evt.preventDefault();
      that = $(this);
      data = that.parent().serialize();
      workResponse = function(object) {
        if (object.created_at) {
          return window.location.href = "/contacts/create";
        } else {
          return $.each(object, function(index, key) {
            alertify.error(key);
            return that.text("Siguiente");
          });
        }
      };
      that.text("Guardando...");
      return $.post("/api/v1/companies", data).done(workResponse);
    },
    search: function(evt) {
      var query, template, that, workResponse;
      evt.preventDefault();
      that = $(this);
      template = Handlebars.compile($("#companies-result-template").html());
      query = that.val();
      workResponse = function(object) {
        return $(".companies-result").html(template({
          companies: object
        }));
      };
      $("#companies-result").html("Buscando...");
      return $.get("/api/v1/companies/search/" + query).done(workResponse);
    },
    edit: function(evt) {
      var container, id, template, that, workResponse;
      evt.preventDefault();
      that = $(this);
      container = $("#company-detail");
      template = Handlebars.compile($("#company-edit-template").html());
      id = that.data("companyId");
      workResponse = function(object) {
        container.find(".modal-body").html(template(object));
        return container.modal({backdrop: 'static'});
      };
      return $.get("/api/v1/companies/" + id).done(workResponse);
    },
    update: function(evt) {
      var container, data, id, template, that, workResponse;
      evt.preventDefault();
      that = $(this);
      id = that.data("companyId");
      container = $(".companies-list").find("[data-company-id=\"" + id + "\"]").parents("tr");
      template = Handlebars.compile($("#company-updated-template").html());
      data = that.parent().serialize();
      workResponse = function(object) {
        if (object.created_at) {
          container.html(template(object));
          alertify.success("Empresa actualizada");
          return $("#company-detail").modal("hide");
        } else {
          return $.each(object, function(key, val) {
            return alertify.error(val);
          });
        }
      };
      return $.ajax({
        url: "/api/v1/companies/" + id,
        type: "PUT",
        data: data
      }).done(workResponse);
    },
    select: function(evt) {
      var id, that, workResponse;
      evt.preventDefault();
      that = $(this);
      id = that.data("companyId");
      workResponse = function() {
        window.location.href = "/contacts/create";
        return false;
      };
      return $.post("/companies/session/" + id).done(workResponse);
    }
  };
  return companies.init();
});


