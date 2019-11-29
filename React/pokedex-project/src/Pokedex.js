import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
   static defaultProps = {
      pokemon: [
         { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
         { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
         { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
         { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
         { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
         { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
         { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
         { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
      ]
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