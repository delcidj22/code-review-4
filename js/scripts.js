function Pizza(size, topping) {
this.size = size 
this.topping = topping
} 

Pizza.prototype.cost = function() {
  let pizzaTotal = 0;
  const size = new Map ([
    ["Small", 15.00],
    ["Mediun", 19.00],
    ["Large", 22.00],
  ])
  const topping = new Map ([
    ["Pepperoni", 1.50],
    ["Ham", 1.50],
    ["Pineapple", 1.00],
    ["Onion", 1.00],
    ["Olives", 1.00],
    ["Mixed Peppers", 1.00],
    ["Pesto", 1.25],
  ]);
  this.topping.forEach(function(element) {
    pizzaTotal = topping.get(element) 
  });
  total = size.get(this.size) + pizzaTotal;
  return total;
}


$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    
  } 
}