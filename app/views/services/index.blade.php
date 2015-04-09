@section('content')
<div class="row col-lg-12">
  <div class="col-lg-12" id="services">
    <div class="panel panel-default services-list">
      <div class="panel-body">
        <div class="row">
        <div class="col-md-3 col-sm-4 col-xs-6">
        <form action="#" class="service-search" method="POST">
          <input type="text" name="query" class="form-control service-query" placeholder="Buscar Servicios">
        </form>
      </div>

    <a href="#" class="service-see-more btn btn-default btn-sm" data-offset="0">Ver más</a>
    <a href="#" class="service-open-create btn btn-primary btn-sm" >Nuevo Servicio</a>
    </div>
    <hr>
        <div class="table-responsive">
          <table class="table table-striped table-condensed">
            <tr class="thead">
              <th>Titulo</th>
              <th>Precio 1</th>
              <th>Precio 2</th>
              <th></th>
            </tr>
          </table>
        </div>
      </div><!-- end panel-body -->
    </div> <!-- end panel -->
  </div> <!-- end col -->
</div>
<div class="modal fade" id="service-create-modal">
  <div class="modal-dialog">
    <div class="modal-content"></div>
  </div>
</div>
<!-- includes -->
@include('services/list')
@include('services/edit')
@include('services/partials/_service')
@include('services/partials/_edit')
@stop