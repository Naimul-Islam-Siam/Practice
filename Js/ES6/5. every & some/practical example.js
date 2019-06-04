function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

var userName = new Field("2cool");
var password = new Field("mypassword");
var dateOfBirth = new Field("05/06/19");

var fields = [userName, password, dateOfBirth];

var formIsValid = fields.every(function (field) {
    field.validate();
});

if (formIsValid) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}