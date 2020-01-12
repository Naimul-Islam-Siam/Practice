//Single Request

const request = new XMLHttpRequest();

//error handling
request.addEventListener("load", () => {
   console.log("It Worked!");
   const data = JSON.parse(request.responseText); //JSON to JavaScript
   console.log(data);
});

request.addEventListener("error", (e) => {
   console.log("Error!!!", e);
});

//send request
request.open("GET", "https://swapi.co/api/planets/");
request.send();

console.log("Request Sent");


//Chaining
const request = new XMLHttpRequest();

//error handling
request.addEventListener("load", () => {
   console.log("It Worked!");
   const data = JSON.parse(request.responseText); //JSON to JavaScript

   const filmUrl = data.results[0].films[0];

   //secondrequest
   const filmReq = new XMLHttpRequest();
   filmReq.addEventListener("load", () => {
      filmData = JSON.parse(filmReq.responseText);
      console.log(`Film Title: ${filmData.title}`);
   });
   filmReq.addEventListener("error", (e) => {
      console.log("Error2!", e);
   });

   filmReq.open("GET", filmUrl);
   filmReq.send();
   console.log("2nd request sent");
});

request.addEventListener("error", (e) => {
   console.log("Error!!!", e);
});

//send request
request.open("GET", "https://swapi.co/api/planets/");
request.send();

console.log("Request Sent");