<script type="text/x-handlebars-template" id='quotation-mail-template'>
  <div class="modal-body">
    <form id="quotation-mail-form">
      <div class="row">
    		<div class="form-group col-lg-6">
    			<input type="text" name="mail_recipient_1" class="form-control" placeholder="Para" value="{{ mail_recipient_1 }}">
    		</div>
        <div class="form-group col-lg-6">
          <input type="text" name="mail_recipient_2" class="form-control" placeholder="Para" value="{{ mail_recipient_2 }}">
        </div>
      </div>
      <div class="form-group">
    	 <textarea name="mail_message" id="" rows="5" class="form-control summernote" placeholder="Mensaje">{{mail_message}}</textarea>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <a class="btn btn-primary btn-sm quotation-mail-save">Guardar</a>
    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Cancelar</button>
  </div>
</script>

<div class="modal fade" id="quotation-mail-modal">
  <div class="modal-dialog">
    <div class="modal-content">
   
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->




