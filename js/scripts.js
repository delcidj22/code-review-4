function Pizza(topping, size) {
this.topping = topping;
this.size = size; 

} 


Pizza.prototype.totalCost = function() {
  let toppingPrice = 0;
  let sizePrice = 0; 
  for(let i = 0; i <this.topping.length; i++ ) {
    toppingPrice += 2;
  };

  if(this.size === "small") {
    sizePrice = 15.00;
  } 
  else if(this.size === "medium") {
    sizePrice = 19.00;
  } 
  else if(this.size === "large") {
    sizePrice = 22.00;
  }  
  return sizePrice + toppingPrice;
}



$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    const topping = $('input:checkbox[name="topping"]:checked').map(function() {
      return $(this).val();
    }).get();
    const size = $("input:radio[name=size]:checked").val()
    const total = new Pizza(topping, size);
    const price = (total.totalCost());
    $('#cost').html(price);
    $('#orderComplete').show();
  });
});

