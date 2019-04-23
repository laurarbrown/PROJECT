
//Hover function for video on index page
$(document).ready(function () {
  var playing = false;
    $('.moonvid').hover(function () {
      if(!playing) {
        playing = true;
        $(this)[0].play();
      }
    }, function () {
      var el = $(this)[0];
      if(playing) {
        playing = false;
        el.pause();
        el.currentTime = 0;
      }
    });
});
