function User(id) {
    this.id = id;
}

function generateId() {
    return Math.floor(Math.random() * 100000);
}

function createAdmin(user = new User(generateId())) { //default argument
    user.admin = true;

    return user;
}

createAdmin();