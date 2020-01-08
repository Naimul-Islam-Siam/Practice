import React, { useState, useEffect } from 'react'
import axios from 'axios';

function SWMovies() {
   const [number, setNumber] = useState(1);
   const [movie, setMovie] = useState("");

   useEffect(() => {
      async function fetchData() {
         const response = await axios.get(`https://swapi.co/api/films/${number}`);
         setMovie(response.data);
      }
      fetchData();
   }, [number]);

   //if the second argument is not passed useEffect will keep rendering infinitely
   //second argument [number] indicates, render useEffect only if number is updated/changed
   //if multiple arguments is needed we can add them using comma [number, ...]
   //we can use multiple useEffect in the same code

   return (
      <div>
         <h1>Select a movie</h1>
         <select value={number} onChange={(e) => setNumber(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
         </select>
         <h2>You Chose {movie.title}</h2>
         <p>{movie.opening_crawl}</p>
      </div>
   );
};

export default SWMovies;