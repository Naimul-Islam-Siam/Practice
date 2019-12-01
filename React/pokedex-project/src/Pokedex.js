import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
   static defaultProps = {
      pokemon: []
   }

   render() {
      let result;
      if (this.props.isWinner) {
         result = <h3 style={{ color: "green" }}>Winning Hand</h3>
      } else {
         result = <h3 style={{ color: "red" }}>Losing Hand</h3>
      }

      return (
         <div className="Pokedex">
            {/* <h1 style={{ fontSize: "30px" }}>{this.props.player1 ? "Player1" : "Player2"}</h1> */}
            <h4>Total Exp: {this.props.totalExp}</h4>
            {result}
            <div className="Pokedex-cards">
               {this.props.pokemon.map(p =>
                  <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
               )}
            </div>
         </div>
      )
   }
}

export default Pokedex;