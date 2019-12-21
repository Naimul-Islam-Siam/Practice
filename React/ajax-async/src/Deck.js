import React, { Component } from 'react';
import axios from 'axios';
import { Card } from './Card';
const api_base_url = "https://deckofcardsapi.com/api/deck";

export class Deck extends Component {
   constructor(props) {
      super(props);
      this.state = { deck: null, drawn: [] };
      this.getCard = this.getCard.bind(this);
   }

   async componentDidMount() {
      let deck = await axios.get(`${api_base_url}/new/shuffle/`);
      this.setState({
         deck: deck.data
      });
   }

   async getCard() {
      let deck_id = this.state.deck.deck_id;
      let card_url = `${api_base_url}/${deck_id}/draw/`;
      try {
         let cardRes = await axios.get(card_url);
         if (!cardRes.data.success) {
            throw new Error("No Card Remaining");
         }

         let card = cardRes.data.cards[0];
         console.log(cardRes.data);

         this.setState(st => ({
            drawn: [
               ...st.drawn, {
                  id: card.code,
                  name: `${card.value} of ${card.suits}`,
                  image: card.image
               }
            ]
         }));
      } catch (err) {
         alert(err);
      }

   }

   render() {
      let cards = this.state.drawn.map(c => (
         <Card key={c.id} name={c.name} image={c.image} />
      ));

      return (
         <div>
            <h1>Card Dealer</h1>
            {cards}
            <button onClick={this.getCard}>Add Card</button>
         </div>
      );
   }
};