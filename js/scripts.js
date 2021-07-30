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
CustomerOrder.prototype.kadimasPizza = {
  name: "Kadima's Pizza",

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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy +
          customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy +
          customerOrder.kadimasPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.kadimasPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy +
          customerOrder.kadimasPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.kadimasPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.kadimasPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.kadimasPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.kadimasPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.kadimasPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Potato, sausage and bacon - KSh. ${customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.kadimasPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.kadimasPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[1].small +
          customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.kadimasPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Small - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[1].small} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.kadimasPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy +
          customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy +
          customerOrder.kadimasPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.kadimasPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy +
          customerOrder.kadimasPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Crispy - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[1].crispy} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.kadimasPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Potato, sausage and bacon - KSh. ${customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.kadimasPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.kadimasPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed +
          customerOrder.kadimasPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Stuffed - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[2].stuffed} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.kadimasPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.kadimasPizza.toppingPrice[1].potato_sausage_bacon}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.kadimasPizza.toppingPrice[2]
            .black_olives_anchovies_capers +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Black olives, anchovies and capers - KSh. ${customerOrder.kadimasPizza.toppingPrice[2].black_olives_anchovies_capers}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
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
        (customerOrder.kadimasPizza.pizzaSizePrice[2].medium +
          customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free +
          customerOrder.kadimasPizza.toppingPrice[3]
            .mixed_sliced_mushrooms_and_garlic +
          customerOrder.kadimasPizza.deliveryPrice) *
        pizzaNumberTotal;

      let orderSummary = `
            <h2>Order Summary</h2>
            <p>Type of Pizza: ${typeOfPizza}</p>
            <p>Delivery location: ${deliveryLocation}</p>
            <p>Number of orders: ${pizzaNumberTotal}</p>
            <p>Pizza size: Medium - KSh. ${customerOrder.kadimasPizza.pizzaSizePrice[2].medium} </p>
            <p>Crust: Glutten free - KSh. ${customerOrder.kadimasPizza.pizzaCrustPrice[3].glutten_free} </p>
            <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${customerOrder.kadimasPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
            <p>Delivery: - KSh. ${customerOrder.kadimasPizza.deliveryPrice}</p>
            <hr>
            <p>Total: - KSh. ${totalPrice}
            `;
      $(".formOutput").html(orderSummary);
      alert("your pizza will be delivered at " + deliveryLocation);
    }

