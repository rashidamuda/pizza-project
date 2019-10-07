var totalCosts = [];

function PlaceOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

var sizePizza = ["Small", "Medium", "Large"];
var toppingsPizza = ["Pepperoni", "chicken", "bacon", "beef"];

PlaceOrder.prototype.cost = function() {
  if (this.size === sizePizza[0]) {
    this.price += 400;
  } else if (this.size === sizePizza[1]) {
    this.price += 700;
  } else if (this.size === sizePizza[2]) {
    this.price += 1000;
  }

  if (this.toppings === toppingsPizza[0]) {
    this.price += 150;
  } else if (this.toppings === toppingsPizza[1]) {
    this.price += 150;
  } else if (this.toppings === toppingsPizza[2]) {
    this.price += 150;
  } else if (this.toppings === toppingsPizza[3]) {
    this.price += 150;
  }
  return this.price;
};

PlaceOrder.prototype.totalCost = function() {
  var orderTotal = 0;
  for (var order = 0; order < totalCosts.length; order++) {
    orderTotal += totalCosts[order];
    alert(orderTotal);
    
  }
};
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
    alert("type of crust .. " + crust);
  });
  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#NumberOfPizzas")
      .find(":selected")
      .text();
    alert(" number of pizzas ordered .. " + number);
    var newPizzaOrder = new PlaceOrder(sizePizza, toppingsPizza);
       newPizzaOrder.cost();
       totalCosts.push(newPizzaOrder.price);
       alert(totalCosts)
  });
});
