const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([65, 56, 778, 34]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: "Fresh Tomato Pasta",
                publisher: "Jonas"
            };

            resolve(`${ID}: ${recipe.title}`);

        }, 1500, recID);
    });
};

const getRelated = publisher => {
    setTimeout(pub => {
        return new Promise((resolve, reject) => {
            const recipe = {
                title: "Italian Pizza",
                publisher: "Jonas"
            };

            resolve(`${pub}: ${recipe.title}`);
        })
    }, 1500, publisher);
};

getIDs
    .then(IDs => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated("Jonas");
    })
    .then(recipe => {
        console.log(recipe);
    })
    .catch(error => {
        console.log(error);
    });