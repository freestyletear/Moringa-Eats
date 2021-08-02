// CUSTOMER ORDER CONSTRUCTOR
let CustomerOrder = function (
  typeOfPizza,
  pizzaSize,
  crust,
  toppings,
  deliveryOption,
  pizzaNumberTotal,
  deliveryLocation
) {
  this.typeOfPizza = typeOfPizza;
  this.pizzaSize = pizzaSize;
  this.crust = crust;
  this.toppings = toppings;
  this.deliveryOption = deliveryOption;
  this.pizzaNumberTotal = pizzaNumberTotal;
  this.deliveryLocation = deliveryLocation;
};

// PRICING OBJECT
CustomerOrder.prototype.moringaEatsPizza = {
  name: "Moringa East's Pizza",

  pizzaSizePrice: [
    { default: 0 },
    { small: 500 },
    { medium: 800 },
    { large: 1200 },
  ],

  pizzaCrustPrice: [
    { default: 0 },
    { crispy: 200 },
    { stuffed: 220 },
    { glutten_free: 300 },
  ],

  deliveryPrice: 100,

  toppingPrice: [
    { default: 0 },
    { potato_sausage_bacon: 300 },
    { black_olives_anchovies_capers: 500 },
    { mixed_sliced_mushrooms_and_garlic: 700 },
  ],
};

$(document).ready(function () {
  $("button#customizeOrder").click(function (event) {
    event.preventDefault();

    let typeOfPizza = $("#pizzaTypes").val();
    let pizzaSize = $("#pizzaSize").val();
    let crust = $("#crust").val();
    let toppings = $("#toppings").val();
    let deliveryOption = $("input[name='delivery']").val();
    let pizzaNumberTotal = parseInt($("#pizzaNumberTotal").val());
    let deliveryLocation = $("#location").val();

    $(".formOutput").show();
    // NEW INSTANCE OF CUSTOMER OBJECT
    let customerOrder = new CustomerOrder(
      typeOfPizza,
      pizzaSize,
      crust,
      toppings,
      deliveryOption,
      pizzaNumberTotal,
      deliveryLocation
    );

    // PRICE CALCULATIONS
    // For small pizza

    // CRISPY option - potato_sausage_bacon
    if (
      pizzaSize == "small" &&
      crust == "crispy" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
        `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // crispy black_olives_anchovies_capers
    if (
      pizzaSize == "small" &&
      crust == "crispy" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // crispy mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "small" &&
      crust == "crispy" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - potato_sausage_bacon
    if (
      pizzaSize == "small" &&
      crust == "stuffed" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - black_olives_anchovies_capers
    if (
      pizzaSize == "small" &&
      crust == "stuffed" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "small" &&
      crust == "stuffed" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - potato_sausage_bacon
    if (
      pizzaSize == "small" &&
      crust == "glutten_free" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Potato, sausage and bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - black_olives_anchovies_capers
    if (
      pizzaSize == "small" &&
      crust == "glutten_free" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "small" &&
      crust == "glutten_free" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[1].small +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }
    // PRICE CALCULATIONS
    // For medium pizza

    // CRISPY option - potato_sausage_bacon
    if (
      pizzaSize == "medium" &&
      crust == "crispy" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // crispy black_olives_anchovies_capers
    if (
      pizzaSize == "medium" &&
      crust == "crispy" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // crispy mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "medium" &&
      crust == "crispy" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - potato_sausage_bacon
    if (
      pizzaSize == "medium" &&
      crust == "stuffed" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Potato, sausage and bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - black_olives_anchovies_capers
    if (
      pizzaSize == "medium" &&
      crust == "stuffed" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "medium" &&
      crust == "stuffed" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - potato_sausage_bacon
    if (
      pizzaSize == "medium" &&
      crust == "glutten_free" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - black_olives_anchovies_capers
    if (
      pizzaSize == "medium" &&
      crust == "glutten_free" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "medium" &&
      crust == "glutten_free" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }
    // PRICE CALCULATIONS
    // For LARGE pizza

    // CRISPY option - potato_sausage_bacon
    if (
      pizzaSize == "large" &&
      crust == "crispy" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // crispy black_olives_anchovies_capers
    if (
      pizzaSize == "large" &&
      crust == "crispy" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // crispy mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "large" &&
      crust == "crispy" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - potato_sausage_bacon
    if (
      pizzaSize == "large" &&
      crust == "stuffed" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - black_olives_anchovies_capers
    if (
      pizzaSize == "large" &&
      crust == "stuffed" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // STUFFED option - mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "large" &&
      crust == "stuffed" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
        <h2>Order Summary</h2>
        <p>Type of Pizza: ${typeOfPizza}</p>
        <p>Delivery location: ${deliveryLocation}</p>
        <p>Number of orders: ${pizzaNumberTotal}</p>
        <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
        <p>Crust: Stuffed - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[2].stuffed} </p>
        <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
        <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
        <hr>
        <p>Total: - KSh. ${totalPrice}
        `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - potato_sausage_bacon
    if (
      pizzaSize == "large" &&
      crust == "glutten_free" &&
      toppings == "potato_sausage_bacon" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - black_olives_anchovies_capers
    if (
      pizzaSize == "large" &&
      crust == "glutten_free" &&
      toppings == "black_olives_anchovies_capers" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

    // GLUTTEN_FREE option - mixed_sliced_mushrooms_and_garlic
    if (
      pizzaSize == "large" &&
      crust == "glutten_free" &&
      toppings == "mixed_sliced_mushrooms_and_garlic" &&
      deliveryOption == "on"
    ) {
      let totalPrice =
        (customerOrder.moringaEatsPizza.pizzaSizePrice[3].large +
          customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.moringaEatsPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.moringaEatsPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Large - KSh. ${customerOrder.moringaEatsPizza.pizzaSizePrice[3].large} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.moringaEatsPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.moringaEatsPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.moringaEatsPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }
  });
});

$(document).ready(function () {
  $("#radioDelivery").click(function () {
    $("#locationDetails").show();
  });
});