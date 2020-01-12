async function get3Pokemon() {
   const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
   const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
   const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

   //parallel
   //one response won't wait for another response to be resolved
   const results = await Promise.all([promise1, promise2, promise3]);

   printPokemon(results);
}

function printPokemon(arr) {
   for (let pokemon of arr) {
      console.log(pokemon.data.name);
   }
}

get3Pokemon();