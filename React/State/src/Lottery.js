import React, { Component } from 'react';
import Ball from './Ball';
import './Ball.css';

class Lottery extends Component {
   static defaultProps = {
      title: 'Lottery',
      maxBall: 6,
      maxNum: 40
   }

   constructor(props) {
      super(props);
      this.state = { nums: Array.from({ length: this.props.maxBall }) };
      this.handleClick = this.handleClick.bind(this);
   }

   generate() {
      this.setState(currState => ({
         nums: currState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
      }));
   }

   handleClick() {
      this.generate();
   }

   render() {
      return (
         <section>
            <div className="wrapper">
               <h1>{this.props.title}</h1>
               <div>
                  {this.state.nums.map(n =>
                     <Ball num={n} />
                  )}
               </div>
            </div>
            <button onClick={this.handleClick}>Generate</button>
         </section>
      );
   }
};

export default Lottery;