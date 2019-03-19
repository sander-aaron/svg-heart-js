$('#dino-nest').on('mousemove', function (eventObj){
  var location = $('#dino-nest').outerWidth()/2;
  if (eventObj.clientX < location) {
     $('#egg-big').addClass('egg-left');
     $('#egg-big').removeClass('egg-right');
  } else {
     $('#egg-big').addClass('egg-right');
     $('#egg-big').removeClass('egg-left');
  }
});
