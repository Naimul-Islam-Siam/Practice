const color1 = ["red", "green"];
const color2 = ["black", "gray"];
const color3 = ["brown", "yellow"];

const allColors = ["blue", ...color1, ...color2, ...color3];

console.log(allColors);

function validateShoppingList(...items) {
    if (items.indexOf("milk" < 0)) {
        return ["milk", ...items];
    }
}

console.log(validateShoppingList("orange", "cucumber", "rice", "salt"));