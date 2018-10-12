//https://nnattawat.github.io/flip/#front
$(document).ready(function() {


  $("#testingContainer").flip({
  trigger: "click",
  front: ".question",
  back: ".answer",
  speed: "400"
});

});


$(document).ready(function(){
  $("#module-html").click(function(){
    animate();
  });
  $("#module-css").click(function(){
    animate();
  });
  $("#module-jquery").click(function(){
    animate();
  });
  $("#module-javascript").click(function(){
    animate();
  });
  $("#module-api").click(function(){
    animate();
  });
  $("#module-git").click(function(){
    animate();
  });
});

