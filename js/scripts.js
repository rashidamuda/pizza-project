$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var size = $("#SizeOfPizza")
      .find(":selected")
      .text();
    alert(size);
    var toppings = [];
    $("#toppings :checked").each(function() {
        toppings.push($(this).val());
        alert(toppings);
      });
    
  });

  $("form").submit(function(event) {
    event.preventDefault();
    var crust = $("#TypeOfCrust")
      .find(":selected")
      .text();
    alert(crust);
  
  });
  $("form").submit(function(event) {
      event.preventDefault();
      var number = $("#NumberOfPizzas")
      .find(":selected")
      .text();
      alert(number);
  });
});
