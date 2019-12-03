import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
   render() {
      return (
         <div>
            <div className="Ball">{this.props.num}</div>
         </div>
      );
   }
}

export default Ball;