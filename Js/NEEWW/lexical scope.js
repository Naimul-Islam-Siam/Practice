function outer() {
   let movie = "The Book Thief";

   function inner() {
      let movie = "Local Hero";
      console.log(`Inner: ${movie}`); //Local Hero

      function extraInner() {
         console.log(`ExtraInner: ${movie}`); //Local Hero
      }
      extraInner();
   }
   inner();
   console.log(`Outer: ${movie}`); //The Book Theif
}
outer();

// Lexically lower ordered function (function declared inside another function) will get access to the variables of the higher ordered functions.

// inner will have access to variables declared in inner and outer.
// extraInner will have access to variables declared inside extraInner, inner and outer.

// first the function will search for the variable in its own scope.
// If it finds the variable the function will use that.
// If it doesn’t find inside its own scope, it’ll search in the upper lexical scope and so on.

// But a higher lexical ordered function won’t get access from lower ordered function.

// For example outer won’t get access to variable declared inside inner or extraInner.
