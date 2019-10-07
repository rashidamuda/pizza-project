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
    var DeliveryOrder = [];
    $("#delivery :checked").each(function() {
      DeliveryOrder.push($(this).val());
      alert("would you like your pizza delivered ? " + DeliveryOrder);
    });
  });

  $("form").submit(function(event) {
    event.preventDefault();
    var crust = $("#TypeOfCrust")
      .find(":selected")
      .text();
    alert( "type of crust .. " + crust);
  });
  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#NumberOfPizzas")
      .find(":selected")
      .text();
    alert(" number of pizzas ordered .. " + number);
  });
  var totalPrice =[];
  function Order (optionSize) {
      this.optionSize = optionSize;
      this.toppings = 150;
  }
    order.prototype.pizzaCost = function() {
        if (this.optionSize === "large") {
            this.pizzaPrice = 1000;
        }else if (this.optionSize === "medium") {
            

        }
    }
 
});
