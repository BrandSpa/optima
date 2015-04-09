@section('content')
<div class="row">
  <div class="col-lg-8">
    <div class="panel panel-default services-list">
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table table-striped table-condensed">
          <tr>
            <th>Titulo</th>
            <th>Precio 1</th>
            <th>Precio 2</th>
            <th></th>
          </tr>
          @foreach($services as $service)
            <tr>
              <td><a href="#" class="service-edit" data-service-id="[[ $service->id ]]">[[ $service->title ]]</a></td>
              <td>$ [[ $service->price_1 ]]</td>
              <td>$ [[ $service->price_2 ]]</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#" class="service-remove" data-service-id="[[ $service->id ]]">Eliminar</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            @endforeach
          </table>
        </div>
        [[ $services->links() ]]
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-body">
        <form action="">
          <div class="form-group">
            <input type="text" name="title" class="form-control" placeholder="Titulo">
          </div>
          <div class="form-group">
           <textarea name="text" class="form-control summernote" placeholder="Texto" rows="5"></textarea>
         </div>
         <div class="row">
          <div class="form-group col-lg-6">
            <input type="text" name="price_1" class="form-control" placeholder="Precio 1">
          </div>
          <div class="form-group col-lg-6">
            <input type="text" name="price_2" class="form-control" placeholder="Precio 2">
          </div>
        </div>
        <a href="#" class="btn btn-primary service-store btn-sm">Guardar</a>
      </form>
      </div>
    </div>
  </div>
  <!-- end col -->

</div>

<!-- includes -->
@include('services.list')
@include('services.edit')

@stop