<script id="quotations-results-template" type="text/x-handlebars-template">  
 
  <div class="col-lg-4">
  <div class="panel panel-default">
    <div class="panel-body">
      <h2>{{ totalToday }}</h2>
      <h4> Cotizaciones hoy </h4>
    </div>
  </div>
</div>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-body">
        <h2>{{ totalMonth }}</h2>
       <h4> Cotizaciones {{ currentMonth }} </h4>
      </div>
    </div>
  </div> 
    
  </div>  
  <div class="col-lg-4">
  <div class="panel panel-default">
    <div class="panel-body">
      <h2 class="price">{{ totalPreviousMonth }}</h2>
      <h4> Cotizaciones {{ previousMonth }} </h4>
    </div>
  </div>
  </div>  
</script>