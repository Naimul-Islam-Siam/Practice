var products = [
    {
        name: "Cucumber",
        type: "vegetables",
        quantity: 0,
        price: 10
    },

    {
        name: "Banana",
        type: "fruit",
        quantity: 5,
        price: 7
    },

    {
        name: "Celery",
        type: "vegetables",
        quantity: 30,
        price: 9
    },

    {
        name: "Orange",
        type: "fruit",
        quantity: 10,
        price: 20
    }
];

var filteredProducts = [];

//for loop
for (var i = 0; i < products.length; i++) {
    if (products[i].type === "fruit") {
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

console.log("--------------");

//filter helper
var filteredVeg = products.filter(function (product) {
    return product.type === "vegetables";
});

console.log(filteredVeg);

console.log("--------------");

var wantedProducts = products.filter(function (product) {
    return product.type === "vegetables" && product.quantity > 0 && product.price < 10;
});

console.log(wantedProducts);