import React, { Component } from 'react';
import Dice from './Dice';
import './Dice.css';

class Button extends Component {
   constructor(props) {
      super(props);
      this.state = { number1: 1, number2: 1, maxNum: 6, rolling: false };
      this.sides = ['one', 'two', 'three', 'four', 'five', 'six'];
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      let randNum1 = Math.floor(Math.random() * this.state.maxNum + 1);
      let randNum2 = Math.floor(Math.random() * this.state.maxNum + 1);
      this.setState({ number1: randNum1, number2: randNum2, rolling: true });

      setTimeout(() => {
         this.setState({ rolling: false });
      }, 1000);
   }

   render() {
      return (
         <div className="Rolldice">
            <h2>Number is {this.state.number1} & {this.state.number2}</h2>
            <div className="Rolldice-container">
               <Dice face={this.sides[this.state.number1 - 1]} rolling={this.state.rolling} />
               <Dice face={this.sides[this.state.number2 - 1]} rolling={this.state.rolling} />
            </div>

            <button onClick={this.handleClick} disabled={this.state.rolling}>
               {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>
         </div >
      );
   }
};

export default Button;