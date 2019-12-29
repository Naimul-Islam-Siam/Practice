import React, { Component } from 'react'
import './DogList.css';

export default class DogList extends Component {
   render() {
      let dog = this.props.dogs.map(d =>
         <div className="DogList-dog col-lg-4 text-center" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3>{d.name}</h3>
         </div>);
      return (
         <div className="DogList">
            <h1 className="display-1">Dog List</h1>
            <div className="container">
               <div className="row">
                  {dog}
               </div>
            </div>
         </div>
      );
   }
};