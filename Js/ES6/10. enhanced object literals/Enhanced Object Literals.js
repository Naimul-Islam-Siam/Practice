//ES5
var name = "John";
var pin = 1234;
var isAdmin = true;

var user = {
    name: name,
    pin: pin,
    isAdmin: isAdmin,

    authenticate: function (pinEntered) {
        return this.pin === pinEntered;
    }
}

console.log(user);


//ES6
const name1 = "Jane";
const pin1 = 2345;
const isAdmin1 = true;
let role = "developer";

const user1 = {
    name1,
    pin1,
    isAdmin1,
    [role]: true,

    authenticate1(pinEntered) {
        return this.pin1 === pinEntered;
    }
};

console.log(user1);