const makeDogPromise = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let rand = Math.random();
         rand > 0.5 ? resolve() : reject();
      }, 3000);
   });
};

makeDogPromise()
   .then(() => {
      console.log("Yay we got a dog!!!");
   })
   .catch(() => {
      console.log("Sad no dog :(");
   });