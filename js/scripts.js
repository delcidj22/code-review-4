function Pizza(size, topping) {
this.size = size; 
this.topping = topping;
} 

Pizza.prototype.totalCost = function() {
  let toppingPrice = 0;
  let sizePrice = 0; 
  for(let i = 0; i <this.topping.length; i++ ) {
    toppingPrice++;
  };

  if(this.size === 'pizzaSize1') {
    sizePrice = 15.00;
  } else if(this.size === 'pizzaSize2') {
    sizePrice = 19.00;
  } else if(this.size === 'pizzaSize3') {
    sizePrice = 22.00;
  }
  return toppingPrice + sizePrice;
}

$(document).ready(function() {
  $("#pizza-order").submit(function(e) {
    e.preventDefault();
    const topping = $('input[name="topping"]:checked').map(function() {
      return $(this).val();
    }).get();
    const size = $("#size").val();
    const total = new Pizza(topping, size);
    const price = (total.totalCost());
    $('#cost').html(price);
    $('#orderComplete').show();

  });
});

