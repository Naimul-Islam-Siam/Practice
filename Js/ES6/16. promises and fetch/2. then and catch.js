var promise = new Promise((resolve, reject) => {
    resolve();
    console.log("------");
});

promise
    .then(() => {
        console.log("Finally Finished");
    })
    .then(() => {
        console.log("I was also ran");
    })
    .catch(() => {
        console.log("uh oh!");
    })