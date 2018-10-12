//https://nnattawat.github.io/flip/#front
$(document).ready(function () {


  $("#testingContainer").flip({
    trigger: "click",
    front: ".question",
    back: ".answer",
    speed: "400"
  });
  $(document).ready(function () {
  $("#module-html").click(function (event) {
    event.preventDefault();
  });
  $("#module-css").click(function (event) {
    event.preventDefault();
  });
  $("#module-jquery").click(function (event) {
    event.preventDefault();
  });
  $("#module-javascript").click(function (event) {
    event.preventDefault();
  });
  $("#module-api").click(function (event) {
    event.preventDefault();
  });
  $("#module-git").click(function (event) {
    event.preventDefault();
  });

  $("#review").click(function (event) {
    event.preventDefault();
  });

  $("#understand").click(function (event) {
    event.preventDefault();
  });

});