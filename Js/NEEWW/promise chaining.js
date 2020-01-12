const fakeRequest = (url) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const pages = {
            '/about': "This is the about page",
            '/contact': "Contact us",
            '/users': [
               { id: 1, username: "Smith" },
               { id: 2, username: "Jason" }
            ],
            '/users/1': {
               id: 1,
               username: "Smith",
               location: "Capetown",
               likes: 344,
               topLikedPost: 460422
            },
            '/users/2': {
               id: 2,
               username: "Jason",
               location: "Birmingham",
               likes: 678,
               topLikedPost: 103127
            },
            '/posts/460422': {
               id: 460422,
               details: "Bangladesh won against South Africa! Unbelievable"
            },
            '/posts/103127': {
               id: 103127,
               details: "It's raining at Birmingham! So surprising right?"
            }
         };

         const data = pages[url];

         data ? resolve({ status: 200, data: data }) : reject({ status: 404 });
      }, 2000);
   });
};

fakeRequest('/users')
   .then((res) => {
      const id = res.data[1].id;

      return fakeRequest(`/users/${id}`);
   })
   .then((res) => {
      const postId = res.data.topLikedPost;

      return fakeRequest(`/posts/${postId}`);
   })
   .then((res) => {
      const post = res.data.details;

      console.log(post);
   })
   .catch((res) => {
      console.log(`Oh snap! Status: ${res.status}`);
   });

// fakeRequest('/users')
//    .then((res) => {
//       const id = res.data[0].id;

//       fakeRequest(`/users/${id}`)
//          .then((res) => {
//             const postId = res.data.topLikedPost;

//             fakeRequest(`/posts/${postId}`)
//                .then((res) => {
//                   const post = res.data.details;

//                   console.log(post);
//                })
//          })
//    })
//    .catch((res) => {
//       console.log("Oh Snap!");
//       console.log(`Status: ${res.status}`);
//    });