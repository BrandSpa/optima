<script id="notifications-center-template" type="x-handlebars-template">
  <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <span class="label label-danger" data-count="{{ count }}">{{ count }}</span></a>
      <ul class="dropdown-menu" role="menu"></ul>
  </li>
</script>

<script id="notification-template" type="x-handlebars-template">
  <a href="#" class="notification-readed">{{ message }}</a>
</script>
      