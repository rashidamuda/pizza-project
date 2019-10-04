$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var crust = $("#TypeOfCrust")
      .find(":selected")
      .text();

    $("form").submit(function(event) {
      event.preventDefault();
      var size = $("#SizeOfPizza")
        .find(":selected")
        .text();
      alert(size +" "+ crust);
    });
  });
});
