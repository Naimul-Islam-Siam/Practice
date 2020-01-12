fetch("https://swapi.co/api/planets/")
   .then(res => {
      if (!res.ok) throw new Error(`Status Code: ${res.status}`);
      return res.json()
   })
   .then(data => {
      const filmUrl = data.results[0].films[0];
      return fetch(filmUrl)
   })
   .then(res => {
      if (!res.ok) throw new Error(`Status Code: ${res.status}`);
      return res.json();
   })
   .then(data => {
      const filmTitle = data.title;
      console.log(`Title: ${filmTitle}`);
   })
   .catch(e => {
      console.log(e);
   });