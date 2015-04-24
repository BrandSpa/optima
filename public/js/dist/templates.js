this["optima"] = this["optima"] || {};
this["optima"]["templates"] = this["optima"]["templates"] || {};
this["optima"]["templates"]["page_dashboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-lg-9\">\n  <div class=\"panel panel-default quotations\">\n    <div class=\"panel-heading quotations-filters\">\n      <a href=\"#\" class=\"quotation-open-quote btn btn-primary btn-sm\">Nueva Cotización</a>\n    </div>\n\n    <div class=\"panel-body\">\n      <div class=\"row quotations-filters-container\"></div>\n      <hr>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr class=\"thead\">\n              <th>#</th>\n              <th></th>\n              <th>Estado</th>\n              <th>Asesor</th>\n              <th>Empresa</th>\n              <th>Contacto</th>\n              <th>Creada</th>\n            </tr>\n          </thead>\n          <tbody></tbody>\n        </table>\n      </div>  \n      <div class=\"panel-footer quotation-paginate-container\"> </div>\n    </div>\n\n  </div> <!-- end col -->\n\n\n  <div class=\"panel panel-default\" id=\"todos\">\n    <div class=\"panel-heading\">\n      <a href=\"#\" class=\"btn btn-primary btn-sm todo-open-create\">Crear tarea</a>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Completada</th>\n              <th>Título</th>\n              <th>Descripción</th>\n              <th>Creada</th>\n              <th>Vencimiento</th>\n              <th>Asignada por</th>\n              <th>Para</th>\n              <th>Cotización</th>\n            </tr>\n          </thead>\n          <tbody>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div> <!-- end row -->\n\n<div class=\"col-lg-3\" style=\"padding-left: 7px\">\n  <div class=\"panel panel-default activities\">\n    <div class=\"panel-heading\">\n      <h5>Actividad Reciente</h5>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed\"></table>\n      </div>\n    </div>\n  </div>\n</div> <!-- end col -->\n\n<!-- includes -->\n\n<div class=\"modal fade\" id=\"todo-create-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\"></div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"todo-create-modal\"> </div>\n\n\n";
},"useData":true});
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
this["optima"]["templates"]["contact_company_quote"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n  <td><a href=\"#\" class=\"btn btn-primary btn-xs contact-quote\">Cotizar</a></td>";
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
    + "        <option value=\"Asesores Comerciales\">Asesores comerciales</option>\n        <option value=\"Cliente\">Cliente</option>\n        <option value=\"Página Web Avante\">Página Web Avante</option>\n        <option value=\"Google Adwords\">Google Adwords</option>\n        <option value=\"Referido\">Referido</option>\n        <option value=\"Promoción\">Promoción</option>\n        <option value=\"Paginas Amarillas\">Paginas Amarillas</option>\n        <option value=\"Paginas Amarillas Web\">Paginas Amarillas Web</option>\n        <option value=\"Teléfono\">Teléfono</option>\n        <option value=\"Redes Sociales\">Redes Sociales</option>\n        <option value=\"Banner\">Banner</option>\n        <option value=\"Otros\">Otros</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-lg-6\">\n      <select name=\"who_call\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.who_call : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option value=\"cliente\">Cliente</option>\n        <option value=\"nosotros\">Nosotros</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <textarea name=\"comment\" class=\"form-control\"  rows=\"2\"  placeholder=\"Nota\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</textarea>\n  </div>\n</form>";
},"useData":true});
this["optima"]["templates"]["contact_quote"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"modal-body\">\n  <a href=\"#\" class=\"btn btn-warning btn-sm contacts-see\">Ver Contactos</a>\n  <p></p>\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped table-condensed\"></table>\n  </div>\n"
    + ((stack1 = this.invokePartial(partials.contact_form,depth0,{"name":"contact_form","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n<div class=\"modal-footer\">\n  <a href=\"#\" class=\"contact-create-store btn btn-primary btn-sm\">Siguiente</a>\n  <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n</div>";
},"usePartial":true,"useData":true});
this["optima"]["templates"]["contacts_company_select"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <select name=\"contact_id\" class=\"form-control\" id=\"select-company-contact\">\n  <option value=\"\">Seleccionar Contacto</option>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"useData":true});
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
    + ((stack1 = this.invokePartial(partials._sector_list,depth0,{"name":"_sector_list","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </select>\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <select name=\"city\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials._cities_list,depth0,{"name":"_cities_list","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"Dirección\" value=\""
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"Teléfono\" value=\""
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"web\" class=\"form-control\" placeholder=\"Web\" value=\""
    + alias3(((helper = (helper = helpers.web || (depth0 != null ? depth0.web : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"web","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <textarea name=\"comment\" class=\"form-control\"  rows=\"2\" class=\"span6\" placeholder=\"Comentario\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n  </form>\n  </div>\n    \n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"company-save-store btn btn-primary btn-sm\">Guardar</a>\n    <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n  </div>\n\n\n";
},"usePartial":true,"useData":true});
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
this["optima"]["templates"]["company_quote"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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

  return "  <div class=\"modal-body\">\n    <form action=\"\" id=\"company-search-form\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"query\" class=\"form-control company-query\" placeholder=\"Buscar Empresa\">\n      </div>\n    </form>\n    <div id=\"company-results\">\n      <table class=\"table table-striped table condensed\"></table>\n    </div>\n  <hr>\n    <form id=\"company-create-form\">\n    <div class=\"row\">\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Razón social\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"nit\" class=\"form-control\" placeholder=\"NIT\" value=\""
    + alias3(((helper = (helper = helpers.nit || (depth0 != null ? depth0.nit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nit","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    \n      <div class=\"form-group col-lg-6\">\n        <select name=\"sector\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sector : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials._sector_list,depth0,{"name":"_sector_list","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </select>\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <select name=\"city\" class=\"form-control\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials._cities_list,depth0,{"name":"_cities_list","data":data,"indent":"          ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </select>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"address\" class=\"form-control\" placeholder=\"Dirección\" value=\""
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"Teléfono\" value=\""
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"web\" class=\"form-control\" placeholder=\"Web\" value=\""
    + alias3(((helper = (helper = helpers.web || (depth0 != null ? depth0.web : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"web","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <textarea name=\"comment\" class=\"form-control\"  rows=\"2\" class=\"span6\" placeholder=\"Comentario\">"
    + alias3(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n  </form>\n\n  </div>\n    \n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"company-quote-store btn btn-primary btn-sm\">Siguiente</a>\n    <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n  </div>";
},"usePartial":true,"useData":true});
this["optima"]["templates"]["company_result"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.nit || (depth0 != null ? depth0.nit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nit","hash":{},"data":data}) : helper)))
    + "</td>\n<td><a href=\"#\" class=\"btn btn-primary btn-xs company-result-quote\">Cotizar</a></td>";
},"useData":true});
this["optima"]["templates"]["company_select_contact"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<select name=\"contact_id\" class=\"form-control\" id=\"select-company-contact\">\n  <option value=\"\">Seleccionar Contacto</option>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
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
this["optima"]["templates"]["quotation_comment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <textarea name=\"comment\" rows=\"10\" class=\"form-control summernote\" id=\"quotation-comment-text\">"
    + this.escapeExpression(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn btn-primary btn-sm quotation-comment-save\">Guardar</a>\n    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">Cancelar</button>\n  </div>";
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
this["optima"]["templates"]["quotation_mail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " <div class=\"modal-body\">\n  <form id=\"quotation-mail-form\">\n    <div class=\"row\">\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"mail_recipient_1\" class=\"form-control\" placeholder=\"Para\" value=\""
    + alias3(((helper = (helper = helpers.mail_recipient_1 || (depth0 != null ? depth0.mail_recipient_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mail_recipient_1","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <input type=\"text\" name=\"mail_recipient_2\" class=\"form-control\" placeholder=\"Para\" value=\""
    + alias3(((helper = (helper = helpers.mail_recipient_2 || (depth0 != null ? depth0.mail_recipient_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mail_recipient_2","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n     <textarea name=\"mail_message\" id=\"\" rows=\"5\" class=\"form-control summernote\" placeholder=\"Mensaje\">"
    + alias3(((helper = (helper = helpers.mail_message || (depth0 != null ? depth0.mail_message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mail_message","hash":{},"data":data}) : helper)))
    + "</textarea>\n   </div>\n </form>\n</div>\n<div class=\"modal-footer\">\n  <a class=\"btn btn-primary btn-sm quotation-mail-save\">Guardar</a>\n  <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">Cancelar</button>\n</div>";
},"useData":true});
this["optima"]["templates"]["quotation_no_effective"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.no_effective || (depth0 != null ? depth0.no_effective : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"no_effective","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.no_effective || (depth0 != null ? depth0.no_effective : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"no_effective","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">¿Por qué no es efectiva?</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <select class=\"form-control\" id=\"quotation-no-effective-select\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.no_effective : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option value=\"No disponible\">No disponible</option>\n        <option value=\"No confiable\">No confiable</option>\n        <option value=\"Competencia\">Competencia</option>\n        <option value=\"Por cliente\">Por cliente</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n    <textarea id=\"no_effective_note\" class=\"form-control\" placeholder=\"nota\">"
    + this.escapeExpression(((helper = (helper = helpers.no_effective_note || (depth0 != null ? depth0.no_effective_note : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"no_effective_note","hash":{},"data":data}) : helper)))
    + "</textarea>\n</div>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn btn-primary btn-sm quotation-no-effective-save\">Guardar</a>\n    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">Cancelar</button>\n  </div>";
},"useData":true});
this["optima"]["templates"]["quotation_no_send"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.status_cause || (depth0 != null ? depth0.status_cause : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status_cause","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.status_cause || (depth0 != null ? depth0.status_cause : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status_cause","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">¿Por qué no es enviada?</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <select class=\"form-control\" id=\"quotation-no-send-select\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.status_cause : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option value=\"No confiable\">No confiable</option>\n        <option value=\"Competencia\">Competencia</option>\n        <option value=\"Por cliente\">Por cliente</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n    <textarea id=\"no_send_note\" class=\"form-control\" placeholder=\"nota\">"
    + this.escapeExpression(((helper = (helper = helpers.no_send_note || (depth0 != null ? depth0.no_send_note : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"no_send_note","hash":{},"data":data}) : helper)))
    + "</textarea>\n</div>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn btn-primary btn-sm quotation-no-send-save\">Guardar</a>\n    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">Cancelar</button>\n  </div>";
},"useData":true});
this["optima"]["templates"]["quotation_options"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    return "          <option value=\"\">Seleccionar tipo</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.type_category || (depth0 != null ? depth0.type_category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type_category","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.type_category || (depth0 != null ? depth0.type_category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type_category","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(depth0,helpers,partials,data) {
    return "          <option value=\"\">Seleccionar categoría de tipo</option>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.client_type || (depth0 != null ? depth0.client_type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"client_type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.client_type || (depth0 != null ? depth0.client_type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"client_type","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"11":function(depth0,helpers,partials,data) {
    return "          <option value=\"\">Seleccionar tipo de cliente</option>\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.found_us || (depth0 != null ? depth0.found_us : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"found_us","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.found_us || (depth0 != null ? depth0.found_us : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"found_us","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"15":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">Seleccionar como llegó?</option>\n";
},"17":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.offer || (depth0 != null ? depth0.offer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"offer","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.offer || (depth0 != null ? depth0.offer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"offer","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"19":function(depth0,helpers,partials,data) {
    return "        <option value=\"\">Seleccionar ofrecer</option>\n";
},"21":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "       <option value=\""
    + alias3(((helper = (helper = helpers.advisor || (depth0 != null ? depth0.advisor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"advisor","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.advisor || (depth0 != null ? depth0.advisor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"advisor","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"23":function(depth0,helpers,partials,data) {
    return "       <option value=\"\">Seleccionar asesor</option>\n";
},"25":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"btn btn-default btn-xs service-approval-add\">Agregar aprobación de servicio en mail</a>\n";
},"27":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"btn btn-danger btn-xs service-approval-remove\">Quitar aprobación de servicio en mail</a>\n";
},"29":function(depth0,helpers,partials,data) {
    return "\n";
},"31":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"labels pull-right\">\n  <a href=\"#\" class=\"btn btn-warning btn-xs send\">Enviar</a>\n  <a href=\"#\" class=\"btn btn-warning btn-xs change-delivered btn-hidden\">Entregada</a>\n  <a href=\"#\" class=\"btn btn-danger btn-xs open-no-send btn-hidden\">No enviada</a>\n\n  <a href=\"/quotations/"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/rethink\" class=\"btn btn-default btn-xs btn-hidden\">Replantear</a>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"quotation-options\">\n  <div class=\"row btn-hidden\">\n    <div class=\"form-group col-lg-4\">\n        <select class=\"select-type form-control select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "          <option value=\"Alquiler\">Alquiler</option>\n          <option value=\"Servicio\">Servicio</option>\n        </select>\n      </div>\n    \n    <div class=\"form-group col-lg-4\">\n        <select class=\"select-type-category form-control select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type_category : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "          <option value=\"Inventario\">Inventario</option>\n          <option value=\"Pedido\">Pedido</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-lg-4\">\n        <select  class=\"select-client-type form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.client_type : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "          <option value=\"Activo\">Activo</option>\n          <option value=\"Inactivo\">Inactivo</option>\n          <option value=\"Nuevo\">Nuevo</option>\n        </select>\n      </div>\n\n  <div class=\"form-group col-lg-4\">\n  \n      <select  class=\"select-found-us form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.found_us : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.found_us_options,depth0,{"name":"found_us_options","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "      </select>\n    </div>\n <div class=\"form-group col-lg-4\">\n      <select class=\"select-offer form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.offer : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "        <option value=\"Desktops\">Desktops</option>\n        <option value=\"Laptops\">Laptops</option>\n        <option value=\"Apple\">Apple</option>\n        <option value=\"Servers\">Servers</option>\n        <option value=\"IT Service\">IT Service</option>\n        <option value=\"IT Service 24/7\">IT  Service 24/7</option>\n        <option value=\"Rescate Online\">Rescate Online</option>\n        <option value=\"Discos Duros Seguros\">Discos Duros Seguros</option>\n        <option value=\"Networks\">Networks</option>\n        <option value=\"Complements\">Complements</option>\n        <option value=\"Printers\">Printers</option>\n      </select>\n     </div>\n\n    <div class=\"col-lg-4 form-group\">\n      <select class=\"select-advisor form-control  select-xs\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.advisor : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "       <option value=\"Andrés Rojas\">Andrés Rojas</option>\n       <option value=\"Diego Peña\">Diego Peña</option>\n       <option value=\"No aplica\">No aplica</option>\n       <option value=\"Otros\">Otros</option>\n     </select>\n   </div>\n\n </div>\n <hr class=\"btn-hidden\">\n <div class=\"btn-group btn-md\">\n \n  <button class=\"btn btn-default btn-xs  dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n    PDF <span class=\"caret\"></span>\n  </button>\n\n  <ul class=\"dropdown-menu\" role=\"menu\">\n    <li> <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdf/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Color </a> </li>\n    <li> <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdflogos\" target=\"_blank\">Con logos </a> </li>\n    <li> <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/pdfbn\" target=\"_blank\">Blanco y negro </a> </li>\n  </ul>\n</div>\n\n<a href=\"#\" class=\"open-comment btn btn-default btn-xs\">Agregar Comentario</a>\n<a href=\"#\" class=\"btn btn-default btn-xs open-mail\">Agregar email</a>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.service_approval : depth0),{"name":"if","hash":{},"fn":this.program(25, data, 0),"inverse":this.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "\n<hr class=\"visible-xs\">\n\n"
    + ((stack1 = (helpers.isEffective || (depth0 && depth0.isEffective) || alias1).call(depth0,(depth0 != null ? depth0.status : depth0),{"name":"isEffective","hash":{},"fn":this.program(29, data, 0),"inverse":this.program(31, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
this["optima"]["templates"]["quotation_paginate_btn"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"btn btn-default quotation-see-more btn-sm\" style=\"width: 100%\">Cargar más</a>";
},"useData":true});
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
    + "\"> Duplicar </a>\n    </td>\n    <td>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.ordered : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + " \n    </td>\n    <td>\n      <a href=\"#\" class=\"delete btn btn-danger btn-xs\">Eliminar</a>\n    </td>\n ";
},"useData":true});
this["optima"]["templates"]["quotation_service"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " </td>\n<td><a href=\"#\" class=\"btn btn-default btn-xs service-open-edit btn-hidden\">Editar</a></td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_1 || (depth0 != null ? depth0.price_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_1","hash":{},"data":data}) : helper)))
    + "</td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_2 || (depth0 != null ? depth0.price_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_2","hash":{},"data":data}) : helper)))
    + "</td>\n<td>\n<a href=\"#\" class=\"quotation-service-detach btn btn-danger btn-xs\">Eliminar</a>\n</td>";
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

  return " <span class=\"quotation-labelable\">\n  Cotización "
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\n  </span>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rethink_from : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  \n  <span class=\"label label-"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span>\n  <span class=\"label label-"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.no_effective || (depth0 != null ? depth0.no_effective : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"no_effective","hash":{},"data":data}) : helper)))
    + "</span>\n  <a href=\"/quotations/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/duplicate\" class=\"btn btn-default btn-xs\">Duplicar</a>\n\n\n";
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
this["optima"]["templates"]["quotations_list_filters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-lg-12\">\n   <form action=\"#\" class=\"quotation-search\" method=\"POST\">\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"query\" class=\"form-control quotation-query\" placeholder=\"Buscar Cotización\">\n    </div>\n  </form>\n</div>\n\n<div class=\"col-lg-4\" >\n  <select name=\"\" class=\"form-control filter-status\">\n    <option value=\"\">Selecionar Estado</option>\n    <option value=\"Borrador\">Borrador</option>\n    <option value=\"Enviada\">Enviada</option>\n    <option value=\"Seguimiento\">Seguimiento</option>\n    <option value=\"No enviada\">No enviada</option>\n    <option value=\"Efectiva\">Efectiva</option>\n    <option value=\"No efectiva\">No efectiva</option>\n    <option value=\"Replanteada\">Replanteada</option>  \n  </select>\n</div>\n<div class=\"col-lg-4\">\n  <select name=\"\" class=\"form-control filter-advisor\">\n    <option value=\"\">Selecionar Asesor</option>\n    <option value=\"Andrés Rojas\">Andrés Rojas</option>\n    <option value=\"Diego Peña\">Diego Peña</option>\n    <option value=\"Otros\">Otros</option>\n  </select>\n</div>\n<div class=\"col-lg-4\">\n  <select name=\"\" class=\"form-control filter-client-type\">\n    <option value=\"\">Selecionar tipo de cliente</option>\n    <option value=\"Activo\">Activo</option>\n    <option value=\"Inactivo\">Inactivo</option>\n    <option value=\"Nuevo\">Nuevo</option>\n  </select>\n</div>\n";
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
this["optima"]["templates"]["todo_create"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                  <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <form action=\"#\">\n          <div class=\"row\">\n            <input type=\"hidden\" name=\"tracking_id\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.tracking_id || (depth0 != null ? depth0.tracking_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"tracking_id","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"col-lg-12\">\n              <div class=\"form-group\">\n                <select name=\"user_id\" class=\"form-control\">\n                  <option value=\"\">Seleccionar Usuario</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.users : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\n              </div>\n            </div>\n\n            <div class=\"form-group col-lg-6\">\n              <input type=\"text\" name=\"expires_date\" class=\"form-control datepicker\" placeholder=\"Vencimiento fecha\">\n            </div>\n\n            <div class=\"form-group col-lg-6\">\n              <input type=\"text\" name=\"expires_time\" class=\"form-control timepicker\" placeholder=\"Vencimiento hora\">\n            </div>\n\n            <div class=\"form-group col-lg-12\">\n              <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Título\">\n            </div>\n\n            <div class=\"form-group col-lg-12\">\n              <textarea name=\"description\" class=\"form-control\" rows=\"4\" placeholder=\"Tarea\"></textarea>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <a href=\"#\" class=\"todo-save-store btn btn-primary btn-sm\">Guardar</a>\n        <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n      </div>\n    </div>\n  </div>\n\n";
},"useData":true});
this["optima"]["templates"]["todo_edit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "  <div class=\"modal-body\">\n    <form action=\"#\">\n  <div class=\"row\">\n    <input type=\"hidden\" name=\"tracking_id\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.tracking_id || (depth0 != null ? depth0.tracking_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"tracking_id","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"col-lg-12\">\n    <div class=\"form-group\">\n      <select name=\"user_id\" class=\"form-control\">\n        <option value=\"\">Seleccionar Usuario</option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.users : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group col-lg-6\">\n    <input type=\"text\" name=\"expires_date\" class=\"form-control datepicker\" placeholder=\"Vencimiento fecha\">\n  </div>\n\n  <div class=\"form-group col-lg-6\">\n    <input type=\"text\" name=\"expires_time\" class=\"form-control timepicker\" placeholder=\"Vencimiento hora\">\n  </div>\n  \n  <div class=\"form-group col-lg-12\">\n    <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Título\">\n  </div>\n  \n  <div class=\"form-group col-lg-12\">\n    <textarea name=\"description\" class=\"form-control\" rows=\"4\" placeholder=\"Tarea\"></textarea>\n  </div>\n  </div>\n</form>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"todo-save-update btn btn-primary btn-sm\">Guardar</a>\n    <a href=\"#\" class=\"modal-close btn btn-default btn-sm\">Cancelar</a>\n  </div>";
},"useData":true});
this["optima"]["templates"]["todo_mail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<!-- If you delete this meta tag, Half Life 3 will never be released. -->\n<meta name=\"viewport\" content=\"width=device-width\" />\n\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n<title></title>\n  \n<style>\n  /* ------------------------------------- \n    GLOBAL \n------------------------------------- */\n* { \n  margin:0;\n  padding:0;\n}\n* { font-family: \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif; }\n\nimg { \n  max-width: 100%; \n}\n.collapse {\n  margin:0;\n  padding:0;\n}\nbody {\n  -webkit-font-smoothing:antialiased; \n  -webkit-text-size-adjust:none; \n  width: 100%!important; \n  height: 100%;\n}\n\n\n/* ------------------------------------- \n    ELEMENTS \n------------------------------------- */\na { color: #2BA6CB;}\n\n.btn {\n  text-decoration:none;\n  color: #FFF;\n  background-color: #666;\n  padding:10px 16px;\n  font-weight:bold;\n  margin-right:10px;\n  text-align:center;\n  cursor:pointer;\n  display: inline-block;\n}\n\np.callout {\n  padding:15px;\n  background-color:#F5F5F5;\n  margin-bottom: 15px;\n}\n.callout a {\n  font-weight:bold;\n  color: #333;\n}\n\ntable.social {\n/*  padding:15px; */\n  background-color: #ebebeb;\n  \n}\n.social .soc-btn {\n  padding: 3px 7px;\n  font-size:12px;\n  margin-bottom:10px;\n  text-decoration:none;\n  color: #FFF;font-weight:bold;\n  display:block;\n  text-align:center;\n}\na.fb { background-color: #3B5998!important; }\na.tw { background-color: #1daced!important; }\na.gp { background-color: #DB4A39!important; }\na.ms { background-color: #000!important; }\n\n.sidebar .soc-btn { \n  display:block;\n  width:100%;\n}\n\n/* ------------------------------------- \n    HEADER \n------------------------------------- */\ntable.head-wrap { width: 100%;}\n\n.header.container table td.logo { padding: 15px; }\n.header.container table td.label { padding: 15px; padding-left:0px;}\n\n\n/* ------------------------------------- \n    BODY \n------------------------------------- */\ntable.body-wrap { width: 100%;}\n\n\n/* ------------------------------------- \n    FOOTER \n------------------------------------- */\ntable.footer-wrap { width: 100%;  clear:both!important;\n}\n.footer-wrap .container td.content  p { border-top: 1px solid rgb(215,215,215); padding-top:15px;}\n.footer-wrap .container td.content p {\n  font-size:10px;\n  font-weight: bold;\n  \n}\n\n/* ------------------------------------- \n    TYPOGRAPHY \n------------------------------------- */\nh1,h2,h3,h4,h5,h6 {\nfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; line-height: 1.1; margin-bottom:15px; color:#000;\n}\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small { font-size: 60%; color: #6f6f6f; line-height: 0; text-transform: none; }\n\nh1 { font-weight:200; font-size: 44px;}\nh2 { font-weight:200; font-size: 37px;}\nh3 { font-weight:500; font-size: 27px;}\nh4 { font-weight:500; font-size: 23px;}\nh5 { font-weight:900; font-size: 17px;}\nh6 { font-weight:900; font-size: 14px; text-transform: uppercase; color:#444;}\n\n.collapse { margin:0!important;}\n\np, ul { \n  margin-bottom: 10px; \n  font-weight: normal; \n  font-size:14px; \n  line-height:1.6;\n}\np.lead { font-size:17px; }\np.last { margin-bottom:0px;}\n\nul li {\n  margin-left:5px;\n  list-style-position: inside;\n}\n\n/* ------------------------------------- \n    SIDEBAR \n------------------------------------- */\nul.sidebar {\n  background:#ebebeb;\n  display:block;\n  list-style-type: none;\n}\nul.sidebar li { display: block; margin:0;}\nul.sidebar li a {\n  text-decoration:none;\n  color: #666;\n  padding:10px 16px;\n/*  font-weight:bold; */\n  margin-right:10px;\n/*  text-align:center; */\n  cursor:pointer;\n  border-bottom: 1px solid #777777;\n  border-top: 1px solid #FFFFFF;\n  display:block;\n  margin:0;\n}\nul.sidebar li a.last { border-bottom-width:0px;}\nul.sidebar li a h1,ul.sidebar li a h2,ul.sidebar li a h3,ul.sidebar li a h4,ul.sidebar li a h5,ul.sidebar li a h6,ul.sidebar li a p { margin-bottom:0!important;}\n\n\n\n/* --------------------------------------------------- \n    RESPONSIVENESS\n    Nuke it from orbit. It's the only way to be sure. \n------------------------------------------------------ */\n\n/* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */\n.container {\n  display:block!important;\n  max-width:600px!important;\n  margin:0 auto!important; /* makes it centered */\n  clear:both!important;\n}\n\n/* This should also be a block element, so that it will fill 100% of the .container */\n.content {\n  padding:15px;\n  max-width:600px;\n  margin:0 auto;\n  display:block; \n}\n\n/* Let's make sure tables in the content area are 100% wide */\n.content table { width: 100%; }\n\n\n/* Odds and ends */\n.column {\n  width: 300px;\n  float:left;\n}\n.column tr td { padding: 15px; }\n.column-wrap { \n  padding:0!important; \n  margin:0 auto; \n  max-width:600px!important;\n}\n.column table { width:100%;}\n.social .column {\n  width: 280px;\n  min-width: 279px;\n  float:left;\n}\n\n/* Be sure to place a .clear element after each set of columns, just to be safe */\n.clear { display: block; clear: both; }\n\n\n/* ------------------------------------------- \n    PHONE\n    For clients that support media queries.\n    Nothing fancy. \n-------------------------------------------- */\n@media only screen and (max-width: 600px) {\n  \n  a[class=\"btn\"] { display:block!important; margin-bottom:10px!important; background-image:none!important; margin-right:0!important;}\n\n  div[class=\"column\"] { width: auto!important; float:none!important;}\n  \n  table.social div[class=\"column\"] {\n    width:auto!important;\n  }\n\n}\n</style>\n\n</head>\n \n<body bgcolor=\"#FFFFFF\">\n\n<!-- HEADER -->\n<table class=\"head-wrap\" bgcolor=\"#1D2127\">\n  <tr>\n    <td></td>\n    <td class=\"header container\" >\n        \n        <div class=\"content\">\n        <table bgcolor=\"#1D2127\">\n          <tr>\n            <td><img src=\"http://optima.avante.cc/img/logo-home.png\" alt=\"Optima logo\" /></td>\n          </tr>\n        </table>\n        </div>\n        \n    </td>\n    <td></td>\n  </tr>\n</table><!-- /HEADER -->\n\n\n<!-- BODY -->\n<table class=\"body-wrap\">\n  <tr>\n    <td></td>\n    <td class=\"container\" bgcolor=\"#FFFFFF\">\n\n      <div class=\"content\">\n      <table>\n        <tr>\n          <td>\n            <h4>Nueva tarea</h4>\n            <p><b>Fecha vencimiento:</b> "
    + alias3(((helper = (helper = helpers.expires_date || (depth0 != null ? depth0.expires_date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_date","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.expires_time || (depth0 != null ? depth0.expires_time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"expires_time","hash":{},"data":data}) : helper)))
    + "</p>\n            <b>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</b>\n            <p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            <!-- Callout Panel -->\n            <p class=\"callout\">\n              <a href=\"http://optima.avante.cc\">Click aquí</a> para ver mas tareas asignadas.\n            </p><!-- /Callout Panel -->         \n\n          </td>\n        </tr>\n      </table>\n      </div><!-- /content -->\n                  \n    </td>\n    <td></td>\n  </tr>\n</table><!-- /BODY -->\n\n\n\n</body>\n</html>";
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
this["optima"]["templates"]["service"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " \n<a href=\"#\" class=\"btn btn-default btn-xs service-open-edit\">Editar</a>\n <div class=\"btn-group\">\n    <button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li>\n        <a href=\"#\" class=\"service-delete\">Eliminar</a>\n      </li>\n    </ul>\n  </div>\n</td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_1 || (depth0 != null ? depth0.price_1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_1","hash":{},"data":data}) : helper)))
    + "</td>\n<td>$ "
    + alias3(((helper = (helper = helpers.price_2 || (depth0 != null ? depth0.price_2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_2","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"useData":true});
this["optima"]["templates"]["service_attach"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"modal-body\">\n    <input type=\"hidden\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.quotation_id || (depth0 != null ? depth0.quotation_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"quotation_id","hash":{},"data":data}) : helper)))
    + "\" class=\"quotation-id\">\n    <form action=\"#\" id=\"service-search-form\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"query\" class=\"form-control service-query\" placeholder=\"Buscar servicio\">\n      </div>\n    </form>\n    <div class=\"table-responsive\">\n      <table class=\"table table-condensed\">\n        \n      </table>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn btn-default btn-sm modal-close\">Cerrar</a>\n  </div>";
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
this["optima"]["templates"]["service_item_result"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<td> \n  "
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " <a href=\"#\" class=\"quotation-service-attach btn btn-default btn-xs\">Agregar</a>\n</td>";
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
this["optima"]["templates"]["_cities_list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<option value=\"Bogotá\">Bogotá</option>\n<option value=\"Medellín\">Medellín</option>\n<option value=\"Cali\">Cali</option>\n<option value=\"Barranquilla\">Barranquilla</option>\n<option value=\"Cartagena\">Cartagena</option>\n<option value=\"Cúcuta\">Cúcuta</option>\n<option value=\"Soledad\">Soledad</option>\n<option value=\"Ibagué\">Ibagué</option>\n<option value=\"Bucaramanga\">Bucaramanga</option>\n<option value=\"Santa Marta\">Santa Marta</option>\n<option value=\"Pereira\">Pereira</option>\n<option value=\"Villavicencio\">Villavicencio</option>\n<option value=\"Bello\">Bello</option>\n<option value=\"Valledupar\">Valledupar</option>\n<option value=\"Pasto\">Pasto</option>\n<option value=\"Montería\">Montería</option>\n<option value=\"Manizales\">Manizales</option>\n<option value=\"Buenaventura\">Buenaventura</option>\n<option value=\"Neiva\">Neiva</option>\n<option value=\"Palmira\">Palmira</option>\n<option value=\"Armenia\">Armenia</option>\n<option value=\"Popayán\">Popayán</option>\n<option value=\"Sincelejo\">Sincelejo</option>\n<option value=\"Floridablanca\">Floridablanca</option>\n<option value=\"Itagüí\">Itagüí</option>\n<option value=\"Riohacha\">Riohacha</option>\n<option value=\"Envigado\">Envigado</option>\n<option value=\"Tuluá\">Tuluá</option>";
},"useData":true});
this["optima"]["templates"]["_sector_list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    <option value=\"Administración gubernamental\">Administración gubernamental</option>\n    <option value=\"Alimentación y bebidas\">Alimentación y bebidas</option>\n    <option value=\"Almacenamiento\">Almacenamiento</option>\n    <option value=\"Animación\">Animación</option>\n    <option value=\"Apuestas y casinos\">Apuestas y casinos</option>\n    <option value=\"Arquitectura y planificación\">Arquitectura y planificación</option>\n    <option value=\"Artículos de consumo\">Artículos de consumo</option>\n    <option value=\"Asuntos internacionales\">Asuntos internacionales</option>\n    <option value=\"Atención sanitaria y hospitalaria\">Atención sanitaria y hospitalaria</option>\n    <option value=\"Automatización industrial\">Automatización industrial</option>\n    <option value=\"Banca\">Banca</option>\n    <option value=\"Banca de inversiones\">Banca de inversiones</option>\n    <option value=\"Bienes inmobiliarios\">Bienes inmobiliarios</option>\n    <option value=\"Construcción\">Construcción</option>\n    <option value=\"Comercializadora\">Comercializadora</option>\n    <option value=\"Consultores\">Consultores</option>\n    <option value=\"Derecho\">Derecho</option>\n    <option value=\"Desarrollo de programación\">Desarrollo de programación</option>\n    <option value=\"Desarrollo de software\">Desarrollo de software</option>\n    <option value=\"Diseño\">Diseño</option>\n    <option value=\"Dotación y selección de personal\">Dotación y selección de personal</option>\n    <option value=\"Educación primaria secundaria\">Educación primaria/secundaria</option>\n    <option value=\"Electrónica de consumo\">Electrónica de consumo</option>\n    <option value=\"Enseñanza superior\">Enseñanza superior</option>\n    <option value=\"Entretenimiento\">Entretenimiento</option>\n    <option value=\"Eventos\">Eventos</option>\n    <option value=\"Financiero\">Financiero</option>\n    <option value=\"Hostelería\">Hostelería</option>\n    <option value=\"Marketing y publicidad\">Marketing y publicidad</option>\n    <option value=\"Ingeniería\">Ingeniería</option>\n    <option value=\"Ocio viajes y turismo\">Ocio, viajes y turismo</option>\n    <option value=\"Organización política\">Organización política</option>\n    <option value=\"Recursos humanos\">Recursos humanos</option>\n    <option value=\"Restaurantes\">Restaurantes</option>\n    <option value=\"Salud\">Salud</option>\n    <option value=\"Seguridad\">Seguridad</option>\n    <option value=\"Sistemas\">Sistemas</option>\n    <option value=\"Soluciones de software\">Soluciones de software</option>\n    <option value=\"Telecomunicaciones\">Telecomunicaciones</option>";
},"useData":true});