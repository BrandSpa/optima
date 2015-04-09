this["optima"] = this["optima"] || {};
this["optima"]["templates"] = this["optima"]["templates"] || {};
this["optima"]["templates"]["activity"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " en <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.quotation_id || (depth0 != null ? depth0.quotation_id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quotation_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.quotation_id || (depth0 != null ? depth0.quotation_id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quotation_id","hash":{},"data":data}) : helper)))
    + "</a>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<td>\n<span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</span>\n<br>\n	"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastname : stack1), depth0))
    + " "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n	"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.quotation_id : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<br>\n	\n</td>";
},"useData":true});
this["optima"]["templates"]["activity_quotation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td><span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</span> <br> "
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</td>";
},"useData":true});
this["optima"]["templates"]["company"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <td> "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " </td>\n  <td><a href=\"#\" class=\"company-open-edit btn btn-default btn-xs\">Editar</a></td>\n  <td>"
    + alias3(((helper = (helper = helpers.nit || (depth0 != null ? depth0.nit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nit","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.sector || (depth0 != null ? depth0.sector : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sector","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>\n    <a href=\"#\" class=\"btn btn-primary btn-xs company-open-create-contact\">Agregar contacto</a>\n    <a href=\"#\" class=\"btn btn-default btn-xs company-open-contacts\">Contactos</a>\n  </td>";
},"useData":true});
this["optima"]["templates"]["company_contacts"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.mobile_1 || (depth0 != null ? depth0.mobile_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mobile_1","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.phone_1 || (depth0 != null ? depth0.phone_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone_1","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"modal-body\">\n    <table class=\"table table-condensed table-striped\">\n      <tr>\n        <th>Contacto</th>  \n        <th>Email</th>  \n        <th>Celular</th>  \n        <th>Teléfono</th>\n      </tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.contacts : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\n  </div>\n\n  ";
},"useData":true});
this["optima"]["templates"]["company_create"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.sector || (depth0 != null ? depth0.sector : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sector","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.sector || (depth0 != null ? depth0.sector : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sector","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <option value=\"\">Sector</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"city","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"city","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return "             <option value=\"\">Ciudad</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"modal-body\">\n     <form id=\"company-create-form\">\n    <div class=\"row\">\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Razón social\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"nit\" class=\"form-control\" placeholder=\"NIT\" value=\""
    + alias3(((helper = (helper = helpers.nit || (depth0 != null ? depth0.nit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nit","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    \n      <div class=\"form-group col-lg-6\">\n        <select name=\"sector\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sector : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "          @include('_sections.sectors_list')\n        </select>\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <select name=\"city\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "          @include('_sections.citys_list')\n        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"Dirección\" value=\""
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"Teléfono\" value=\""
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"web\" class=\"form-control\" placeholder=\"Web\" value=\""
    + alias3(((helper = (helper = helpers.web || (depth0 != null ? depth0.web : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"web","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <textarea name=\"comment\" class=\"form-control\"  rows=\"2\" class=\"span6\" placeholder=\"Comentario\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n  </form>\n  </div>\n    \n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"company-save-store btn btn-primary btn-sm\">Guardar</a>\n    <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n  </div>\n\n\n";
},"useData":true});
this["optima"]["templates"]["company_edit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.sector || (depth0 != null ? depth0.sector : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sector","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.sector || (depth0 != null ? depth0.sector : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sector","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">Sector</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"city","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"city","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">Ciudad</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"modal-body\">\n  <form method=\"POST\" action=\"#\" class=\"company-edit-form\">\n  <div class=\"row\">\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Nombre\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"nit\" class=\"form-control\" placeholder=\"NIT\" value=\""
    + alias3(((helper = (helper = helpers.nit || (depth0 != null ? depth0.nit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nit","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <select name=\"sector\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sector : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        @include('_sections.sectors_list')\n      </select>\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <select name=\"city\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option value=\"\">Ciudad</option>\n"
    + ((stack1 = this.invokePartial(partials.cities_options,depth0,{"name":"cities_options","data":data,"indent":"       ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </select>\n    </div> \n    <div class=\"form-group col-lg-12\">\n      <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"Dirección\" value=\""
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"Teléfono\" value=\""
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"web\" class=\"form-control\" placeholder=\"Web\" value=\""
    + alias3(((helper = (helper = helpers.web || (depth0 != null ? depth0.web : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"web","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-12\">\n      <textarea name=\"comment\" class=\"form-control\"  rows=\"2\" class=\"span6\" placeholder=\"Comentario\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n    </div>\n  </form>\n  </div>\n    <div class=\"modal-footer\">\n        <a href=\"#\" class=\"company-save-update btn btn-primary btn-sm\">Guardar</a>\n        <a href=\"#\" class=\"btn btn-default btn-sm modal-close\">Cancelar</a>\n      </div>";
},"usePartial":true,"useData":true});
this["optima"]["templates"]["contact"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " - "
    + this.escapeExpression(((helper = (helper = helpers.mobile_2 || (depth0 != null ? depth0.mobile_2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"mobile_2","hash":{},"data":data}) : helper)))
    + " ";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return " - "
    + this.escapeExpression(((helper = (helper = helpers.phone_2 || (depth0 != null ? depth0.phone_2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"phone_2","hash":{},"data":data}) : helper)))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>\n	"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + " \n	<a href=\"#\" data-contact-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-default btn-xs contact-open-edit\">Editar</a>\n</td>\n<td>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n<td>\n	"
    + alias3(((helper = (helper = helpers.mobile_1 || (depth0 != null ? depth0.mobile_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mobile_1","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.mobile_2 : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</td>\n<td>\n	"
    + alias3(((helper = (helper = helpers.phone_1 || (depth0 != null ? depth0.phone_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone_1","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.phone_2 : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</td>\n<td>"
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>";
},"useData":true});
this["optima"]["templates"]["contact_create"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"modal-body\">\n"
    + ((stack1 = this.invokePartial(partials.contact_form,depth0,{"name":"contact_form","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n    <div class=\"modal-footer\">\n      <a href=\"#\" class=\"contact-create-store btn btn-primary btn-sm\">Guardar</a>\n      <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n    </div>";
},"usePartial":true,"useData":true});
this["optima"]["templates"]["contact_edit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"modal-body\">\n"
    + ((stack1 = this.invokePartial(partials.contact_form,depth0,{"name":"contact_form","data":data,"indent":"   ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"contact-save-update btn btn-primary btn-sm\">Guardar</a>\n    <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n  </div>";
},"usePartial":true,"useData":true});
this["optima"]["templates"]["contact_form"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"gender","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"gender","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "          <option value=\"\">forma de pago</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.found_us || (depth0 != null ? depth0.found_us : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"found_us","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.found_us || (depth0 != null ? depth0.found_us : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"found_us","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return "          <option value=\"\">¿Comó nos encontró?</option>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.who_call || (depth0 != null ? depth0.who_call : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"who_call","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.who_call || (depth0 != null ? depth0.who_call : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"who_call","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"11":function(depth0,helpers,partials,data) {
    return "          <option value=\"\">¿Quién llamó?</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form action=\"#\" id=\"contact-create-form\">\n  <div class=\"row\">\n  <input type=\"hidden\" name=\"company_id\" value=\""
    + alias3(((helper = (helper = helpers.company_id || (depth0 != null ? depth0.company_id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"company_id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Nombre\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    \n    <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"lastname\" class=\"form-control\" placeholder=\"Apellido\" value=\""
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <select name=\"gender\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <option value=\"Masculino\">Masculino</option>\n        <option value=\"Femenino\">Femenino</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" value=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Titulo\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"position\" class=\"form-control\" placeholder=\"Posición\" value=\""
    + alias3(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"position","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"phone_1\" class=\"form-control\" placeholder=\"Teléfono 1\" value=\""
    + alias3(((helper = (helper = helpers.phone_1 || (depth0 != null ? depth0.phone_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone_1","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"phone_2\" class=\"form-control\" placeholder=\"Teléfono 2\" value=\""
    + alias3(((helper = (helper = helpers.phone_2 || (depth0 != null ? depth0.phone_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone_2","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"mobile_1\" class=\"form-control\" placeholder=\"Celular 1\" value=\""
    + alias3(((helper = (helper = helpers.mobile_1 || (depth0 != null ? depth0.mobile_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mobile_1","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"mobile_2\" class=\"form-control\" placeholder=\"Celular 2\" value=\""
    + alias3(((helper = (helper = helpers.mobile_2 || (depth0 != null ? depth0.mobile_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mobile_2","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" name=\"fax\" class=\"form-control\" placeholder=\"Fax\" value=\""
    + alias3(((helper = (helper = helpers.fax || (depth0 != null ? depth0.fax : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fax","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <select name=\"pay_method\"  class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.gender : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option value=\"anticipado\">Anticipado</option>\n        <option value=\"30\">30 Días</option>\n        <option value=\"45\">45 Días</option>\n        <option value=\"60\">60 Días</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <select  name=\"found_us\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.found_us : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "        @include('_sections.foundus_list')\n      </select>\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <select name=\"who_call\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.who_call : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option value=\"cliente\">Cliente</option>\n        <option value=\"nosotros\">Nosotros</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <textarea name=\"comment\" class=\"form-control\"  rows=\"2\"  placeholder=\"Nota\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</textarea>\n  </div>\n</form>";
},"useData":true});
this["optima"]["templates"]["cities_options"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<option value=\"Bogotá\">Bogotá</option>\n<option value=\"Medellín\">Medellín</option>\n<option value=\"Cali\">Cali</option>\n<option value=\"Barranquilla\">Barranquilla</option>\n<option value=\"Cartagena\">Cartagena</option>\n<option value=\"Cúcuta\">Cúcuta</option>\n<option value=\"Soledad\">Soledad</option>\n<option value=\"Ibagué\">Ibagué</option>\n<option value=\"Bucaramanga\">Bucaramanga</option>\n<option value=\"Santa Marta\">Santa Marta</option>\n<option value=\"Pereira\">Pereira</option>\n<option value=\"Villavicencio\">Villavicencio</option>\n<option value=\"Bello\">Bello</option>\n<option value=\"Valledupar\">Valledupar</option>\n<option value=\"Pasto\">Pasto</option>\n<option value=\"Montería\">Montería</option>\n<option value=\"Manizales\">Manizales</option>\n<option value=\"Buenaventura\">Buenaventura</option>\n<option value=\"Neiva\">Neiva</option>\n<option value=\"Palmira\">Palmira</option>\n<option value=\"Armenia\">Armenia</option>\n<option value=\"Popayán\">Popayán</option>\n<option value=\"Sincelejo\">Sincelejo</option>\n<option value=\"Floridablanca\">Floridablanca</option>\n<option value=\"Itagüí\">Itagüí</option>\n<option value=\"Riohacha\">Riohacha</option>\n<option value=\"Envigado\">Envigado</option>\n<option value=\"Tuluá\">Tuluá</option>";
},"useData":true});
this["optima"]["templates"]["found_us_options"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<option value=\"Asesores Comerciales\">Asesores comerciales</option>\n<option value=\"Cliente\">Cliente</option>\n<option value=\"Página Web Avante\">Página Web Avante</option>\n<option value=\"Google Adwords\">Google Adwords</option>\n<option value=\"Referido\">Referido</option>\n<option value=\"Promoción\">Promoción</option>\n<option value=\"Paginas Amarillas\">Paginas Amarillas</option>\n<option value=\"Paginas Amarillas Web\">Paginas Amarillas Web</option>\n<option value=\"Teléfono\">Teléfono</option>\n<option value=\"Redes Sociales\">Redes Sociales</option>\n<option value=\"Banner\">Banner</option>\n<option value=\"Otros\">Otros</option>";
},"useData":true});
this["optima"]["templates"]["sectors_options"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<option value=\"Administración gubernamental\">Administración gubernamental</option>\n<option value=\"Alimentación y bebidas\">Alimentación y bebidas</option>\n<option value=\"Almacenamiento\">Almacenamiento</option>\n<option value=\"Animación\">Animación</option>\n<option value=\"Apuestas y casinos\">Apuestas y casinos</option>\n<option value=\"Arquitectura y planificación\">Arquitectura y planificación</option>\n<option value=\"Artículos de consumo\">Artículos de consumo</option>\n<option value=\"Asuntos internacionales\">Asuntos internacionales</option>\n<option value=\"Atención sanitaria y hospitalaria\">Atención sanitaria y hospitalaria</option>\n<option value=\"Automatización industrial\">Automatización industrial</option>\n<option value=\"Banca\">Banca</option>\n<option value=\"Banca de inversiones\">Banca de inversiones</option>\n<option value=\"Bienes inmobiliarios\">Bienes inmobiliarios</option>\n<option value=\"Construcción\">Construcción</option>\n<option value=\"Comercializadora\">Comercializadora</option>\n<option value=\"Consultores\">Consultores</option>\n<option value=\"Derecho\">Derecho</option>\n<option value=\"Desarrollo de programación\">Desarrollo de programación</option>\n<option value=\"Desarrollo de software\">Desarrollo de software</option>\n<option value=\"Diseño\">Diseño</option>\n<option value=\"Dotación y selección de personal\">Dotación y selección de personal</option>\n<option value=\"Educación primaria secundaria\">Educación primaria/secundaria</option>\n<option value=\"Electrónica de consumo\">Electrónica de consumo</option>\n<option value=\"Enseñanza superior\">Enseñanza superior</option>\n<option value=\"Entretenimiento\">Entretenimiento</option>\n<option value=\"Eventos\">Eventos</option>\n<option value=\"Financiero\">Financiero</option>\n<option value=\"Hostelería\">Hostelería</option>\n<option value=\"Marketing y publicidad\">Marketing y publicidad</option>\n<option value=\"Ingeniería\">Ingeniería</option>\n<option value=\"Ocio viajes y turismo\">Ocio, viajes y turismo</option>\n<option value=\"Organización política\">Organización política</option>\n<option value=\"Recursos humanos\">Recursos humanos</option>\n<option value=\"Restaurantes\">Restaurantes</option>\n<option value=\"Salud\">Salud</option>\n<option value=\"Seguridad\">Seguridad</option>\n<option value=\"Sistemas\">Sistemas</option>\n<option value=\"Soluciones de software\">Soluciones de software</option>\n<option value=\"Telecomunicaciones\">Telecomunicaciones</option>";
},"useData":true});
this["optima"]["templates"]["pdf"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"/css/pdf/pdf.css\">\n\n<div class=\"footer\">Código: FO-COM-02 Fecha: 25-mar-2014 Versión 6</div>\n<div id=\"header\">\n	@section('header')\n	@show\n	<span>[[ $quotation->id ]]</span>\n</div>\n\n<div id=\"content\">\n	<div id=\"contact\">\n		<p class=\"date\">Bogotá D.C. [[ date_format($quotation->created_at, 'd/m/Y')  ]]</p>\n		<p></p>\n		<p>[[ $quotation->company->name ]]</p>\n		<p>@if( $quotation->contact->title )[[ $quotation->contact->title ]], @endif [[ $quotation->contact->name ]] [[ $quotation->contact->lastname ]]</p>\n		<p>[[ $quotation->contact->position ]]</p>\n		<p>[[ $quotation->company->address ]]</p>\n		<p>[[ $quotation->contact->phone_1 ]]</p>\n		<p>[[ $quotation->contact->phone_2 ]]</p>\n	</div>\n	\n	<div id=\"intro\">\n		<p>\n			En Avante trabajamos para que usted y su compañía tengan a mano herramientas tecnológicas siempre actualizadas.\n			Nuestro modelo de Renting le permite contar con equipos de última tecnología a su medida,\n			en las principales marcas del mundo, por los periodos que su compañía los necesite,\n			ofreciéndole grandes ventajas tributarias y valores agregados fundamentales como nuestro Servicio Técnico 24/7®,\n			Discos Duros Seguros®, Rescate Online® entre otros, <br>(adjunto encontrará nuestro portafolio de soluciones).\n		</p>\n\n		<p>\n			Atendiendo a su solicitud nos complace enviar la cotización de los productos y servicios solicitados,\n			estamos dispuestos a atender cualquier inquietud y por supuesto a presentarle todo nuestro portafolio,\n			en el que de seguro encontrará nuevas herramientas para su empresa.\n</p>\n	</div>\n</div>\n<br>\n<br>\n<br>\n@yield('content')\n";
},"useData":true});
this["optima"]["templates"]["product_create"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "      <option value=\"\">Producto</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return "      <option value=\"\">Tipo</option>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.period || (depth0 != null ? depth0.period : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"period","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.period || (depth0 != null ? depth0.period : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"period","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"11":function(depth0,helpers,partials,data) {
    return "      <option value=\"\">Periodo</option>\n";
},"13":function(depth0,helpers,partials,data) {
    return "        <input type=\"hidden\" name=\"show\" value=\"0\">\n        <input type=\"checkbox\" name=\"show\" value=\"1\" checked> Total\n";
},"15":function(depth0,helpers,partials,data) {
    return "        <input type=\"hidden\" name=\"show\" value=\"0\">\n        <input type=\"checkbox\" name=\"show\" value=\"1\"> Total\n";
},"17":function(depth0,helpers,partials,data) {
    return "      <input type=\"hidden\" name=\"iva\" value=\"0\">\n      <input type=\"checkbox\" class=\"field-checkbox\"  name=\"iva\" value=\"1\" checked> IVA\n";
},"19":function(depth0,helpers,partials,data) {
    return "      <input type=\"hidden\" name=\"iva\" value=\"0\">\n     <input type=\"checkbox\" class=\"field-checkbox\"  name=\"iva\" value=\"1\" > IVA\n";
},"21":function(depth0,helpers,partials,data) {
    return "    <a href=\"#\" class=\"quotation-product-update btn btn-primary btn-sm\">Guardar</a>\n    <a href=\"#\" class=\"btn btn-default btn-sm modal-close\" >Cancelar</a>\n";
},"23":function(depth0,helpers,partials,data) {
    return "    <a href=\"#\" class=\"quotation-product-save btn btn-primary btn-sm\">Guardar</a>\n    <a href=\"#\" class=\"btn btn-default btn-sm modal-close\" >Cancelar</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"modal-body\">\n <form class=\"product-create-form\">\n  <input type=\"hidden\" name=\"quotation_id\" value=\""
    + alias3(((helper = (helper = helpers.quotation_id || (depth0 != null ? depth0.quotation_id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quotation_id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"row\">\n  <div class=\"form-group col-lg-3\">\n    <select name=\"name\" class=\"form-control select-product-name\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      <option value=\"Desktops\">Desktops</option>\n      <option value=\"Laptops\">Laptops</option>\n      <option value=\"Apple\">Apple</option>\n      <option value=\"Servers\">Servers</option>\n      <option value=\"IT Service\">IT Service</option>\n      <option value=\"IT Service 24/7\">IT  Service 24/7</option>\n      <option value=\"Rescate Online\">Rescate Online</option>\n      <option value=\"Discos Duros Seguros\">Discos Duros Seguros</option>\n      <option value=\"Networks\">Networks</option>\n      <option value=\"Complements\">Complements</option>\n      <option value=\"Printers\">Printers</option>\n      <option value=\"Adicional\">Adicional</option>\n    </select>\n  </div>\n\n  <div class=\"form-group col-lg-3\">\n    <select name=\"type\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n      <option value=\"WorkPro\">WorkPro</option>\n      <option value=\"WorkPlus\">WorkPlus</option>\n      <option value=\"WorkPremium\">WorkPremium</option>\n    </select>\n  </div>\n\n  <div class=\"config\">\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"processor\" placeholder=\"Procesador\" value=\""
    + alias3(((helper = (helper = helpers.processor || (depth0 != null ? depth0.processor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"processor","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6 \">\n      <input type=\"text\" class=\"form-control\" name=\"ram\" placeholder=\"RAM\" value=\""
    + alias3(((helper = (helper = helpers.ram || (depth0 != null ? depth0.ram : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ram","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"hdd\" placeholder=\"Disco Duro\" value=\""
    + alias3(((helper = (helper = helpers.hdd || (depth0 != null ? depth0.hdd : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"hdd","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"burner\" placeholder=\"Unidad optica\" value=\""
    + alias3(((helper = (helper = helpers.burner || (depth0 != null ? depth0.burner : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"burner","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n      <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"network_card\" placeholder=\"Tarjeta red\" value=\""
    + alias3(((helper = (helper = helpers.network_card || (depth0 != null ? depth0.network_card : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"network_card","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"battery\" placeholder=\"Batería\" value=\""
    + alias3(((helper = (helper = helpers.battery || (depth0 != null ? depth0.battery : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"battery","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"monitor\" placeholder=\"Monitor\" value=\""
    + alias3(((helper = (helper = helpers.monitor || (depth0 != null ? depth0.monitor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"monitor","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"keyboard\" placeholder=\"Teclado & Mouse\" value=\""
    + alias3(((helper = (helper = helpers.keyboard || (depth0 != null ? depth0.keyboard : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"keyboard","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"os\" placeholder=\"Sistema operativo\" value=\""
    + alias3(((helper = (helper = helpers.os || (depth0 != null ? depth0.os : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"os","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"office\" placeholder=\"Office\" value=\""
    + alias3(((helper = (helper = helpers.office || (depth0 != null ? depth0.office : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"office","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group col-lg-6\">\n      <input type=\"text\" class=\"form-control\" name=\"antivirus\" placeholder=\"Antivirus\" value=\""
    + alias3(((helper = (helper = helpers.antivirus || (depth0 != null ? depth0.antivirus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"antivirus","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n<div class=\"form-group col-lg-6\">\n  <input type=\"text\" name=\"additional_1\" class=\"additional form-control\" placeholder=\"Adicional\" value=\""
    + alias3(((helper = (helper = helpers.additional_1 || (depth0 != null ? depth0.additional_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"additional_1","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"form-group col-lg-6\">\n  <input type=\"text\" name=\"additional_2\" class=\"additional form-control\" placeholder=\"Adicional\" value=\""
    + alias3(((helper = (helper = helpers.additional_2 || (depth0 != null ? depth0.additional_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"additional_2","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"form-group col-lg-6\">\n  <input type=\"text\" name=\"additional_3\" class=\"additional form-control\" placeholder=\"Adicional\" value=\""
    + alias3(((helper = (helper = helpers.additional_3 || (depth0 != null ? depth0.additional_3 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"additional_3","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"form-group col-lg-6\">\n  <input type=\"text\" name=\"additional_4\" class=\"additional form-control\" placeholder=\"Adicional\" value=\""
    + alias3(((helper = (helper = helpers.additional_4 || (depth0 != null ? depth0.additional_4 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"additional_4","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"form-group col-lg-6\">\n  <input type=\"text\" name=\"additional_5\" class=\"additional form-control\" placeholder=\"Adicional\" value=\""
    + alias3(((helper = (helper = helpers.additional_5 || (depth0 != null ? depth0.additional_5 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"additional_5","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"form-group col-lg-6\">\n  <input type=\"text\" name=\"additional_6\" class=\"additional form-control\" placeholder=\"Adicional\" value=\""
    + alias3(((helper = (helper = helpers.additional_6 || (depth0 != null ? depth0.additional_6 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"additional_6","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n\n  <div class=\"form-group col-lg-3\">\n    <input type=\"text\" class=\"form-control additional\" class=\"form-control\" name=\"lapse\" placeholder=\"Lapso\" value=\""
    + alias3(((helper = (helper = helpers.lapse || (depth0 != null ? depth0.lapse : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lapse","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n  <div class=\"form-group col-lg-3\">\n    <select name=\"period\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.period : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\n      <option value=\"Mes\">Mes</option>\n      <option value=\"Semana\">Semana</option>\n      <option value=\"Día\">Día</option>\n      <option value=\"15 días\">15 días</option>\n      <option value=\"a 3 días\">3 días</option>\n      <option value=\"Hora\">Hora</option>\n      <option value=\"Servicio\">Servicio</option>\n      <option value=\"Venta\">Venta</option>\n    </select>\n  </div>\n  <div class=\"form-group col-lg-3\">\n    <input type=\"text\" class=\"form-control\"  name=\"quantity\" placeholder=\"Cantidad\" value=\""
    + alias3(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n  <div class=\"form-group col-lg-3\">\n    <input type=\"text\" class=\"form-control\"  name=\"price\" placeholder=\"Precio\" value=\""
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n  <div class=\"form-group col-lg-3\">\n    <input type=\"text\" class=\"form-control\"  name=\"spaces\" placeholder=\"Espacios\" value=\""
    + alias3(((helper = (helper = helpers.spaces || (depth0 != null ? depth0.spaces : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"spaces","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n<div class=\"form-group col-lg-6\">\n   <div class=\"checkbox-inline\">\n    <label>\n    <input type=\"hidden\" value=\""
    + alias3(((helper = (helper = helpers.show || (depth0 != null ? depth0.show : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"show","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.is_zero || (depth0 && depth0.is_zero) || alias1).call(depth0,(depth0 != null ? depth0.show : depth0),{"name":"is_zero","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\n    </label>\n  </div>\n   <div class=\"checkbox-inline\">\n    <label>\n    <input type=\"hidden\" value=\""
    + alias3(((helper = (helper = helpers.iva || (depth0 != null ? depth0.iva : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"iva","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.is_zero || (depth0 && depth0.is_zero) || alias1).call(depth0,(depth0 != null ? depth0.iva : depth0),{"name":"is_zero","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "    </label>\n  </div>\n  </div>\n</div>\n  <div class=\"form-group\">\n    <textarea name=\"note\" class=\"form-control\" rows=\"2\"  placeholder=\"Nota\">"
    + alias3(((helper = (helper = helpers.note || (depth0 != null ? depth0.note : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"note","hash":{},"data":data}) : helper)))
    + "</textarea>\n  </div>\n</form>\n</div>\n<div class=\"modal-footer\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
this["optima"]["templates"]["quotation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <span class=\"label\">"
    + this.escapeExpression(((helper = (helper = helpers.status_cause || (depth0 != null ? depth0.status_cause : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"status_cause","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.rethink_from || (depth0 != null ? depth0.rethink_from : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rethink_from","hash":{},"data":data}) : helper)))
    + "\" class=\"label label-Replanteada\"> "
    + alias3(((helper = (helper = helpers.rethink_from || (depth0 != null ? depth0.rethink_from : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rethink_from","hash":{},"data":data}) : helper)))
    + " </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<td> <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " </a>&nbsp; </td>\n\n<td>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n      PDF <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li>\n        <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdf/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"> PDF </a>\n      </li>\n      <li>\n        <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdfbn\" target=\"_blank\" > PDF BN </a>\n      </li>\n      <li>\n        <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdflogos\"  target=\"_blank\" > PDF con logos </a>\n      </li>\n    </ul>\n  </div>\n</td>\n\n<td>\n  <span class=\"label label-"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.status_cause : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rethink_from : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n\n<td>\n  "
    + alias3(((helper = (helper = helpers.advisor || (depth0 != null ? depth0.advisor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"advisor","hash":{},"data":data}) : helper)))
    + "\n</td>\n\n<td> \n  <a href=\"#\" class=\"company-popover\" data-content=\"<b>Dirección:</b> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.address : stack1), depth0))
    + " <br> <b>nit:</b> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.nit : stack1), depth0))
    + " <br> <b>Teléfono:</b> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.phone : stack1), depth0))
    + " <br> \">\n    "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.name : stack1), depth0))
    + " \n  </a>\n</td>\n\n<td>\n  <a href=\"#\" class=\"contact-popover\" data-content=\"<b>Email:</b> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.email : stack1), depth0))
    + " <br> <b>Teléfono:</b> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.phone_1 : stack1), depth0))
    + " <br> <b>Celular:</b> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.mobile_1 : stack1), depth0))
    + " <br> \">\n    "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.lastname : stack1), depth0))
    + "\n  </a>\n</td>\n\n<td>\n  <a href=\"#\" class=\"timeago-popover\" data-content=\"<b>Fecha y hora:</b> "
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\">\n    <span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</span> \n  </a>\n  por "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastname : stack1), depth0))
    + "\n</td>";
},"useData":true});
this["optima"]["templates"]["quotation_activity"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td><span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</span><br> "
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</td>";
},"useData":true});
this["optima"]["templates"]["quotation_contact"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "/ "
    + this.escapeExpression(((helper = (helper = helpers.phone_2 || (depth0 != null ? depth0.phone_2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"phone_2","hash":{},"data":data}) : helper)))
    + "  ";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "/ "
    + this.escapeExpression(((helper = (helper = helpers.mobile_2 || (depth0 != null ? depth0.mobile_2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"mobile_2","hash":{},"data":data}) : helper)))
    + "  ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "  <table class=\"table table-condensed\">\n      <tr>\n      <td>\n        "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n        <a href=\"#\" class=\"btn btn-default btn-xs hidden\">Editar</a>\n      </td>\n    </tr>\n    <tr>\n      <td>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias2(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "\n        <a href=\"#\" class=\"btn btn-default btn-xs edit\">Editar</a>\n      </td>\n    </tr>\n    <tr>\n      <td><a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias2(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></td>\n    </tr>\n    <tr>\n      <td>Teléfonos: "
    + alias2(((helper = (helper = helpers.phone_1 || (depth0 != null ? depth0.phone_1 : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"phone_1","hash":{},"data":data}) : helper)))
    + "  "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.phone_2 : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n    </tr>\n    <tr>\n      <td>Celulares: "
    + alias2(((helper = (helper = helpers.mobile_1 || (depth0 != null ? depth0.mobile_1 : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"mobile_1","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.mobile_2 : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n    </tr>\n</table>";
},"useData":true});
this["optima"]["templates"]["quotation_options"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "     <option value=\"\">Tipo</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.type_category || (depth0 != null ? depth0.type_category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type_category","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.type_category || (depth0 != null ? depth0.type_category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type_category","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return "     <option value=\"\">Categoría de tipo</option>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.client_type || (depth0 != null ? depth0.client_type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"client_type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.client_type || (depth0 != null ? depth0.client_type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"client_type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"11":function(depth0,helpers,partials,data) {
    return "      <option value=\"\">Tipo de cliente</option>\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.found_us || (depth0 != null ? depth0.found_us : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"found_us","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.found_us || (depth0 != null ? depth0.found_us : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"found_us","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"15":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">¿Como llegó?</option>\n";
},"17":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <option value=\""
    + alias3(((helper = (helper = helpers.offer || (depth0 != null ? depth0.offer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"offer","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.offer || (depth0 != null ? depth0.offer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"offer","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"19":function(depth0,helpers,partials,data) {
    return "      <option value=\"\">Ofrecer</option>\n";
},"21":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.advisor || (depth0 != null ? depth0.advisor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"advisor","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.advisor || (depth0 != null ? depth0.advisor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"advisor","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"23":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">Asesor</option>\n";
},"25":function(depth0,helpers,partials,data) {
    return "\n";
},"27":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"labels pull-right\">\n    <a href=\"#\" class=\"btn btn-warning btn-xs send\">Enviar</a>\n    <a href=\"#\" class=\"btn btn-warning btn-xs change-delivered btn-hidden\">Entregada</a>\n    <a href=\"#\" class=\"btn btn-danger btn-xs open-no-send btn-hidden\">No enviada</a>\n    \n    <a href=\"/quotations/"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/rethink\" class=\"btn btn-default btn-xs btn-hidden\">Replantear</a>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"quotation-options\">\n<div class=\"row btn-hidden\">\n\n<div class=\"col-lg-2\">\n  <select class=\"select-type form-control select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    <option value=\"Alquiler\">Alquiler</option>\n    <option value=\"Servicio\">Servicio</option>\n  </select>\n</div>\n\n<div class=\"col-lg-2\">\n  <select class=\"select-type-category form-control select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type_category : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "    <option value=\"Inventario\">Inventario</option>\n    <option value=\"Pedido\">Pedido</option>\n  </select>\n</div>\n\n<div class=\"col-lg-2\">\n  <select  class=\"select-client-type form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.client_type : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "     <option value=\"Activo\">Activo</option>\n     <option value=\"Inactivo\">Inactivo</option>\n     <option value=\"Nuevo\">Nuevo</option>\n  </select>\n</div>\n\n<div class=\"col-lg-2\">\n  <select  class=\"select-found-us form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.found_us : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.found_us_options,depth0,{"name":"found_us_options","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </select>\n</div>\n\n<div class=\"col-lg-2\">\n    <select class=\"select-offer form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.offer : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "      <option value=\"Desktops\">Desktops</option>\n      <option value=\"Laptops\">Laptops</option>\n      <option value=\"Apple\">Apple</option>\n      <option value=\"Servers\">Servers</option>\n      <option value=\"IT Service\">IT Service</option>\n      <option value=\"IT Service 24/7\">IT  Service 24/7</option>\n      <option value=\"Rescate Online\">Rescate Online</option>\n      <option value=\"Discos Duros Seguros\">Discos Duros Seguros</option>\n      <option value=\"Networks\">Networks</option>\n      <option value=\"Complements\">Complements</option>\n      <option value=\"Printers\">Printers</option>\n    </select>\n</div>\n<div class=\"col-lg-2\">\n    <select class=\"select-advisor form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.advisor : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "      <option value=\"Andres Rojas\">Andrés Rojas</option>\n      <option value=\"Diego Rojas\">Diego Peña</option>\n      <option value=\"No aplica\">No aplica</option>\n      <option value=\"Otros\">Otros</option>\n    </select>\n</div>\n</div>\n<hr class=\"btn-hidden\">\n  <div class=\"btn-group btn-md\">\n    <button class=\"btn btn-default btn-xs  dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n      PDF <span class=\"caret\"></span>\n    </button>\n\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li> <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdf/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Color </a> </li>\n      <li> <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdflogos\" target=\"_blank\">Con logos </a> </li>\n      <li> <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdfbn\" target=\"_blank\">Blanco y negro </a> </li>\n    </ul>\n  </div>\n  \n  <a href=\"#\" class=\"open-comment btn btn-default btn-xs\">Agregar Comentario</a>\n  <a href=\"#\" class=\"btn btn-default btn-xs open-mail\">Agregar email</a>\n  <hr class=\"visible-xs\">\n\n"
    + ((stack1 = (helpers.isEffective || (depth0 && depth0.isEffective) || alias1).call(depth0,(depth0 != null ? depth0.status : depth0),{"name":"isEffective","hash":{},"fn":this.program(25, data, 0),"inverse":this.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
this["optima"]["templates"]["quotation_product"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "        "
    + this.escapeExpression(((helper = (helper = helpers.lapse || (depth0 != null ? depth0.lapse : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"lapse","hash":{},"data":data}) : helper)))
    + "\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "        "
    + this.escapeExpression(((helper = (helper = helpers.period || (depth0 != null ? depth0.period : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"period","hash":{},"data":data}) : helper)))
    + "\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.pluralMonth || (depth0 && depth0.pluralMonth) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.period : depth0),{"name":"pluralMonth","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data) {
    return "          Meses\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.fifteen || (depth0 && depth0.fifteen) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.period : depth0),{"name":"fifteen","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    return "            15 días\n";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return "            "
    + this.escapeExpression(((helper = (helper = helpers.period || (depth0 != null ? depth0.period : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"period","hash":{},"data":data}) : helper)))
    + "s\n";
},"15":function(depth0,helpers,partials,data) {
    return "    <a href=\"#\" class=\"unordered btn btn-success btn-xs\">Pedido</a>\n";
},"17":function(depth0,helpers,partials,data) {
    return "      <a href=\"#\" class=\"order btn btn-default btn-xs\">Pedir</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <td> "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n    <td> <a href=\"#\" class=\"btn btn-default btn-xs btn-hidden edit\">Editar</a> </td>\n    <td>\n"
    + ((stack1 = (helpers.fifteen || (depth0 && depth0.fifteen) || alias1).call(depth0,(depth0 != null ? depth0.period : depth0),{"name":"fifteen","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.plural || (depth0 && depth0.plural) || alias1).call(depth0,(depth0 != null ? depth0.lapse : depth0),{"name":"plural","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "    </td>\n    <td>"
    + alias3(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>$ "
    + alias3((helpers.formatCurrency || (depth0 && depth0.formatCurrency) || alias1).call(depth0,(depth0 != null ? depth0.price : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\n    <td>$ "
    + alias3((helpers.formatCurrency || (depth0 && depth0.formatCurrency) || alias1).call(depth0,(depth0 != null ? depth0.total : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</td>\n    <td>\n      <a class=\"btn btn-xs btn-default btn-hidden duplicate\" data-product=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> Duplicar </a>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-default btn-xs btn-hidden dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li>\n            <a href=\"#\" class=\"delete \">Eliminar</a>\n          </li>\n        </ul>\n\n      </div>\n    </td>\n    <td>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.ordered : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + " \n    </td>\n ";
},"useData":true});
this["optima"]["templates"]["quotation_service"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " </td>\n<td><a href=\"#\" class=\"btn btn-default btn-xs service-open-edit btn-hidden\">Editar</a></td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_1 || (depth0 != null ? depth0.price_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_1","hash":{},"data":data}) : helper)))
    + "</td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_2 || (depth0 != null ? depth0.price_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_2","hash":{},"data":data}) : helper)))
    + "</td>\n<td>\n  <div class=\"btn-group btn-hidden\">\n    <button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n    <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li> <a href=\"#\" class=\"quotation-service-detach\">Eliminar</a> </li>\n    </ul>\n  </div>\n</td>";
},"useData":true});
this["optima"]["templates"]["quotation_status"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.rethink_from || (depth0 != null ? depth0.rethink_from : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rethink_from","hash":{},"data":data}) : helper)))
    + "\"><span class=\"label label-default\">"
    + alias3(((helper = (helper = helpers.rethink_from || (depth0 != null ? depth0.rethink_from : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rethink_from","hash":{},"data":data}) : helper)))
    + "</span></a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " <h4 class=\"quotation-labelable\">\n  Cotización "
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rethink_from : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <span class=\"label label-"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n  <span class=\"label label-"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.no_effective || (depth0 != null ? depth0.no_effective : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"no_effective","hash":{},"data":data}) : helper)))
    + "</span>\n  <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/duplicate\" class=\"btn btn-default btn-xs\">Duplicar</a>\n</h4>\n\n";
},"useData":true});
this["optima"]["templates"]["quotation_time"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n      <td>\n        <b>Enviada</b> <span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.sent_at || (depth0 != null ? depth0.sent_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sent_at","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.sent_at || (depth0 != null ? depth0.sent_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sent_at","hash":{},"data":data}) : helper)))
    + "</span>: <br>"
    + alias3(((helper = (helper = helpers.sent_at || (depth0 != null ? depth0.sent_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sent_at","hash":{},"data":data}) : helper)))
    + "\n      </td>\n    </tr>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "    <tr>\n      <td>\n        <b>Enviada en</b> "
    + this.escapeExpression(((helper = (helper = helpers.created_sent_diff || (depth0 != null ? depth0.created_sent_diff : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"created_sent_diff","hash":{},"data":data}) : helper)))
    + " minutos\n      </td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<table class=\"table table-condensed\">\n  <tr>\n    <td>\n      <b>Creada</b> <span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</span>: <br>"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\n    </td>\n  </tr>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sent_at : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.created_sent_diff : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</table>";
},"useData":true});
this["optima"]["templates"]["service"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " <a href=\"#\" class=\"btn btn-default btn-xs service-open-edit\">Editar</a></td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_1 || (depth0 != null ? depth0.price_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_1","hash":{},"data":data}) : helper)))
    + "</td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_2 || (depth0 != null ? depth0.price_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_2","hash":{},"data":data}) : helper)))
    + "</td>\n<td>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li>\n        <a href=\"#\" class=\"service-delete\">Eliminar</a>\n      </li>\n    </ul>\n  </div>\n</td>";
},"useData":true});
this["optima"]["templates"]["service_create"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"modal-body\">\n    <form class=\"form\">\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Titulo\">\n        </div>\n        <div class=\"form-group\">\n         <textarea name=\"text\" class=\"form-control summernote service-text\" placeholder=\"Texto\" rows=\"5\"></textarea>\n       </div>\n       <div class=\"row\">\n        <div class=\"form-group col-lg-6\">\n          <input type=\"text\" name=\"price_1\" class=\"form-control\" placeholder=\"Precio 1\">\n        </div>\n        <div class=\"form-group col-lg-6\">\n          <input type=\"text\" name=\"price_2\" class=\"form-control\" placeholder=\"Precio 2\">\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n     <a href=\"#\" class=\"btn btn-primary btn-sm service-create-store \">Guardar</a>\n     <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n  </div>\n  ";
},"useData":true});
this["optima"]["templates"]["service_edit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"modal-body\">\n    <form class=\"form\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Titulo\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"form-group\">\n       <textarea name=\"text\" class=\"form-control summernote service-text\" placeholder=\"Texto\" rows=\"5\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea>\n     </div>\n     <div class=\"row\">\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"price_1\" class=\"form-control\" placeholder=\"Precio 1\" value=\""
    + alias3(((helper = (helper = helpers.price_1 || (depth0 != null ? depth0.price_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_1","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"price_2\" class=\"form-control\" placeholder=\"Precio 2\" value=\""
    + alias3(((helper = (helper = helpers.price_2 || (depth0 != null ? depth0.price_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_2","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n <a href=\"#\" class=\"btn btn-primary btn-sm service-save-update \">Guardar</a>\n <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n</div>";
},"useData":true});
this["optima"]["templates"]["service_list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"row col-lg-4\">\n    <select class=\"form-control  select-xs\" name=\"service\">\n      <option value=\"\">Seleccionar Servicio</option>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n  </div>";
},"useData":true});
this["optima"]["templates"]["todo"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return " <td>\n    <input type=\"checkbox\" class=\"todo-completed\">\n  </td>\n  <td>\n    "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n  </td>\n  <td>\n    "
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n  </td>\n\n  <td><span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</span></td>\n  <td><span class=\"timeago\" title=\""
    + alias3(((helper = (helper = helpers.expires_date || (depth0 != null ? depth0.expires_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_date","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.expires_time || (depth0 != null ? depth0.expires_time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_time","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.expires_date || (depth0 != null ? depth0.expires_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_date","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.expires_time || (depth0 != null ? depth0.expires_time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_time","hash":{},"data":data}) : helper)))
    + "</span></td>\n\n  <td>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.assigned : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.assigned : depth0)) != null ? stack1.lastname : stack1), depth0))
    + "</td>\n  <td>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastname : stack1), depth0))
    + "</td>\n    <td><a href=\"/quotations/"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.tracking : depth0)) != null ? stack1.quotation_id : stack1), depth0))
    + "\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.tracking : depth0)) != null ? stack1.quotation_id : stack1), depth0))
    + "</a></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.check_completed || (depth0 && depth0.check_completed) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"check_completed","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["optima"]["templates"]["todo_tracking"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<td>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.expires_date || (depth0 != null ? depth0.expires_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_date","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.expires_time || (depth0 != null ? depth0.expires_time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_time","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastname : stack1), depth0))
    + "</td>";
},"useData":true});
this["optima"]["templates"]["tracking"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <span><b>Hablo con:</b> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.lastname : stack1), depth0))
    + "</span>\n      <span class=\"pull-right\">"
    + alias2(((helper = (helper = helpers.register_date || (depth0 != null ? depth0.register_date : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"register_date","hash":{},"data":data}) : helper)))
    + " "
    + alias2(((helper = (helper = helpers.register_time || (depth0 != null ? depth0.register_time : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"register_time","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n    <div class=\"panel-body\">\n      <p> "
    + alias2(((helper = (helper = helpers.report || (depth0 != null ? depth0.report : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"report","hash":{},"data":data}) : helper)))
    + " </p>\n      <a href=\"#\" class=\"pull-right btn btn-primary btn-xs todo-open-create\">Agregar Tarea</a>\n      <hr>\n      <table class=\"table table-condensed todos\">\n        <thead>\n          <tr>\n            <th>Tarea</th>\n            <th>Creada</th>\n            <th>Vencimiento</th>\n            <th>Usuario</th>\n          </tr>\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n    </div>\n  </div> \n\n   ";
},"useData":true});
this["optima"]["templates"]["tracking_create"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "              <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"modal-body\">\n    <form action=\"#\" class=\"form\" id=\"tracking-create-form\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n          <div class=\"form-group\">\n            <select name=\"contact_id\" class=\"form-control\">\n              <option value=\"\">Seleccionar Contacto</option>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group col-lg-6\">\n          <input type=\"text\" name=\"register_date\" class=\"form-control datepicker\" placeholder=\"Fecha\">\n        </div>\n\n        <div class=\"form-group col-lg-6\">\n          <input type=\"text\" name=\"register_time\" class=\"form-control timepicker\" placeholder=\"Hora\">\n        </div>\n\n      </div>  \n      <div class=\"form-group\"><textarea name=\"report\"  rows=\"4\" class=\"form-control\" placeholder=\"Reporte\"></textarea></div>\n    </form>\n  </div>\n  \n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"tracking-save-store btn btn-primary btn-sm\">Guardar</a>\n    <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n  </div>";
},"useData":true});