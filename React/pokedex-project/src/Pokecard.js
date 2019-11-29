import React, { Component } from 'react';
import './Pokecard.css';
const imgApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';

let padToThree = (num) => {
   if (num <= 999) return `00${num}`.slice(-3);
   else return num;
}

class Pokecard extends Component {
   render() {
      const { id, name, type, exp } = this.props;
      let imgSrc = `${imgApi}/${padToThree(id)}.png`;
      return (
         <div className="Pokecard">
            <h1 className="Pokecard-title">{name}</h1>
            <div className="Pokecard-img">
               <img src={imgSrc} alt={name} />
            </div>
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">Exp: {exp}</div>
         </div>
      );
   }
}

export default Pokecard;