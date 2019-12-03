import React, { Component } from 'react';
import Coin from './Coin';

class CoinContainer extends Component {
   static defaultProps = {
      coins: [
         { side: "head", imgUrl: "https://tinyurl.com/react-coin-heads-jpg" },
         { side: "tail", imgUrl: "https://www.bullionmart.ca/wp-content/uploads/2018/08/2018-50-Fine-Silver-Coin-Whales-Tail-Soapstone-Sculpture-OBV-520x520.jpg" }
      ]
   };

   constructor(props) {
      super(props);
      this.state = {
         currCoin: null,
         nFlip: 0,
         nHead: 0,
         nTail: 0
      }
      this.handleClick = this.handleClick.bind(this);
   };

   choice(arr) {
      let randIndex = Math.floor(Math.random() * arr.length);
      return arr[randIndex];
   }

   flipCoin() {
      let newCoin = this.choice(this.props.coins);

      this.setState(st => {
         return {
            currCoin: newCoin,
            nFlip: st.nFlip + 1,
            nHead: st.nHead + (newCoin.side === "head" ? 1 : 0),
            nTail: st.nTail + (newCoin.side === "tail" ? 1 : 0)
         }
      }
      );
   }

   handleClick() {
      this.flipCoin();
   }

   render() {
      return (
         <div className="CoinContainer">
            <h1>Flip Coin</h1>
            {this.state.currCoin && <Coin info={this.state.currCoin} />}
            <button onClick={this.handleClick}>Flip Me</button>
            <p>Out of {this.state.nFlip} flips, Heads: {this.state.nHead} Tails: {this.state.nTail} times</p>
         </div>
      );
   }
};

export default CoinContainer;