

Handlebars.registerHelper('fifteen', function(conditional, options) {
  if(conditional == "15 días") {
  	return options.fn(this);
  } else {
   return options.inverse(this);
  }
});

Handlebars.registerHelper('is_zero', function(conditional, options) {
  if(conditional != "0" || conditional != 0) {
    return options.fn(this);
  } else {
   return options.inverse(this);
  }
});

Handlebars.registerHelper('check_completed', function(conditional, options) {
  if(conditional == "1" || conditional == 1) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('plural', function(conditional, options) {
  if(conditional > 1) {
  	 return options.inverse(this);
  } else {
   return options.fn(this);
  }
});

Handlebars.registerHelper('pluralMonth', function(conditional, options) {
  if(conditional == "Mes") {
  	 return options.fn(this);
  } else {
  	return options.inverse(this);
  }
});


Handlebars.registerHelper('pluralFifteen', function(conditional, options) {
  if(conditional == "15 días") {
  	 return options.fn(this);
  } else {
  	return options.inverse(this);
  }
});

Handlebars.registerHelper('isEffective', function(conditional, options) {
  if(conditional == "Efectiva" || conditional == "No efectiva") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('isNoEffective', function(conditional, options) {
  if(conditional == "No efectiva") {
     return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('isRethink', function(conditional, options) {
  if(conditional == "Replanteada") {
     return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('formatCurrency', function(value) {
  if (value) {
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  } else {
    return 0;
  }
    
});


