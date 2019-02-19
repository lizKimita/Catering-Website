$(document).ready(function(){
  $("button#light-dark").click(function(){
    $(".fade1").fadeToggle();
  });
  $("button#background-change").click(function(){
  
    $("table").addClass("black-background");
  });

});
