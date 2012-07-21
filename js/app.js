$(document).ready(function() {
  
  var $hours = $(".hours");
  var $minutes = $(".minutes");
  var $seconds = $(".seconds");
  // 
  var now = new Date();
  $hours.html(now.getHours());
  $minutes.html(now.getMinutes());
  $seconds.html(now.getSeconds());
  
  $hours.flippanel()
  $minutes.flippanel()
  $seconds.flippanel()
  
  setInterval(function() {
    var now = new Date();
    $(".hours").flippanel(now.getHours().toString());
    $(".minutes").flippanel(now.getMinutes().toString());
    $(".seconds").flippanel(now.getSeconds().toString());
    
  }, 1000)
});