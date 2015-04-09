<script id="activity-template" type="text/x-handlebars-template">
  <td>{{ user.name }} {{ user.lastname }} {{ message }} {{#is_zero quotation_id }}en <a href="/quotations/{{ quotation_id }}">{{ quotation_id }}</a>{{/is_zero}}<br><span class="timeago pull-right" title="{{ created_at }}">{{ created_at }}</span></td>
</script>

