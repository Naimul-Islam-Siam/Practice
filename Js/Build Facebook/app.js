var database = [
    {
        userName: "Siam",
        password: "secret"
    },

    {
        userName: "Joy",
        password: "12345"
    },

    {
        userName: "Hasib",
        password: "rashid"
    }
];

var userNamePrompt = prompt("Your username");
var passwordPrompt = prompt("Your password");

var newsFeed = [
    {
        userName: "Joy",
        post: "I love silicon valley!"
    },

    {
        userName: "Hasib",
        post: "Watch me live on twitch. Link is below."
    }
];

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (user === database[i].userName && pass === database[i].password) {
            return true;
        }
    }

    return false;
}

function login(user, pass) {
    if (isUserValid(user, pass)) {
        console.log("Log in successful");
        console.log("Checkout your NewsFeed :D");
        console.log(newsFeed);
    } else {
        alert("Invalid username and password.");
    }
}

login(userNamePrompt, passwordPrompt);