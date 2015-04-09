<script type="text/x-handlebars-template" id='quotation-times-template'>
  <table class="table table-condensed">
  <tr>
    <td>
      <b>Creada</b> <span class="timeago" title="{{ created_at }}">{{ created_at }}</span>: <br>{{ created_at }}
    </td>
  </tr>

  {{#if sent_at}}
    <tr>
      <td>
        <b>Enviada</b> <span class="timeago" title="{{ sent_at }}">{{ sent_at }}</span>: <br>{{ sent_at }}
      </td>
    </tr>
  {{/if}}

  {{#if sent_in }}
    <tr>
      <td>
        <b>Tiempo de enviada</b><br>{{ sent_in }} minutos
      </td>
    </tr>
  {{/if}}
  
  </table>
</script>
