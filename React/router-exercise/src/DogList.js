import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default class DogList extends Component {
   render() {
      let dog = this.props.dogs.map(d =>
         <div className="DogList-dog col-lg-4 text-center mb-4" key={d.name}>
            <Link to={`/dogs/${d.name}`} style={{ textDecoration: "none" }}>
               <img src={d.src} alt={d.name} />
               <h3 className="underline mt-3">{d.name}</h3>
            </Link>
         </div>);
      return (
         <div className="DogList">
            <h1 className="display-3 mt-3 mb-5">Dog List</h1>
            <div className="container">
               <div className="row">
                  {dog}
               </div>
            </div>
         </div>
      );
   }
};