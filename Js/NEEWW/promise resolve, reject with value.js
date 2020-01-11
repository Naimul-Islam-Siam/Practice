const fakeRequest = (url) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const pages = {
            '/users': [
               { id: 1, username: 'Smith' },
               { id: 2, username: 'Brian' }
            ],
            '/about': "This is the about page",
            '/contact': "This is the contact page"
         };

         const data = pages[url];

         data ? resolve({ status: 200, data: data }) : reject({ status: 404 });
         console.log("------------------");
      }, 3000);
   });
};

fakeRequest('/users')
   .then((res) => {
      console.log(`Status: ${res.status}`);
      console.log(`Data: ${res.data}`);
   })
   .catch((res) => {
      console.log(`Status: ${res.status}`);
   });

fakeRequest('/info')
   .then((res) => {
      console.log(`Status: ${res.status}`);
      console.log(`Data: ${res.data}`);
   })
   .catch((res) => {
      console.log(`Status: ${res.status}`);
   });

fakeRequest('/contact')
   .then((res) => {
      console.log(`Status: ${res.status}`);
      console.log(`Data: ${res.data}`);
   })
   .catch((res) => {
      console.log(`Status: ${res.status}`);
   });