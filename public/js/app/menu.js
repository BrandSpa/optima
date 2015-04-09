
$(document).ready(function() {
  $('.open-menu').sidr();

  $('body >.container').on('click', function(){
    $.sidr('close');
  });

  $('.hide-menu').removeClass('hide');

});

$('.tip').tooltip();

$(document).find('span.timeago').timeago();

