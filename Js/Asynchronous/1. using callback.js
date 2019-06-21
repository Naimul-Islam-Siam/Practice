function getRecipe() {
    setTimeout(() => {
        const recipeID = [65, 56, 778, 34];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {
                title: "Fresh Tomato Pasta",
                publisher: "Jonas"
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: "Italian Pasta",
                    publisher: "Jonas"
                };

                console.log(recipe2);

            }, 1700, recipe.publisher);

        }, 1000, recipeID[2]); //first argument is the callback function to be executed. second argument is the time to wait in ms unit. third argument is the value to pass in the callback function

    }, 1500);
}

getRecipe();