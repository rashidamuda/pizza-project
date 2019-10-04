$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var crust = $("#TypeOfCrust")
      .find(":selected")
      .text();
    alert(crust);
  });
});
