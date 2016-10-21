// Set these variables to their DOM elements

function coffeeMachine() { brew.attr('src', 'static/coffee_machine.jpg');}
function coffeeMug() { brew.attr('src', 'static/coffee_mug.jpg');}
function coffeeBeans() { brew.attr('src', 'static/coffee_beans.jpg');}


var brew = $("#brew");    
var espresso = $("#espresso");
var latte = $("#latte");
var hotChocolate = $("#hot-chocolate");


function coffeeListener(drinkType) {
    drinkType.on('click', makeCoffee);
}

var drinksOrdered = [];

function makeCoffee(evt) {
    coffeeMachine();
    setTimeout(coffeeMug, 1500);
    setTimeout(coffeeBeans, 4000);

    var coffeeType = evt.target.id;

    drinksOrdered.push(coffeeType);
    console.log(drinksOrdered);

    var total = revenue(drinksOrdered);
    myRevenueMessage.html('$' + total);

    if (coffeeType === 'brew') {
        $("#drink-picture").attr('src', 'static/coffee.jpg');
    } else if (coffeeType === 'espresso') {
        $("#drink-picture").attr('src', 'static/espresso.jpg');
    } else if (coffeeType === 'latte') {
        $("#drink-picture").attr('src', 'static/latte.jpg');
    } else if (coffeeType === 'hot-chocolate') {
        $("#drink-picture").attr('src', 'static/hot_chocolate.jpg');
    } 

    $("#drink-order").html(coffeeType);
    $("#drink-total").html('$' + total);
}

// Set event listeners for each coffee type
coffeeListener(brew);
coffeeListener(espresso);
coffeeListener(latte);
coffeeListener(hotChocolate);


var myRevenueMessage = $("#revenue");

var prices = {
    "brew": 2.05,
    "espresso": 3.25,
    "latte": 4.15,
    "hot-chocolate": 2.50
};


function revenue(drinksOrdered) {
    var totalRevenue = 0;

    for (var i = 0; i < drinksOrdered.length; i++) {
        totalRevenue += prices[drinksOrdered[i]];
    };
    return totalRevenue.toFixed(2);
}