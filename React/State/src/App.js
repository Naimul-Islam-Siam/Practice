import React, { Component } from 'react';
import Button from './Button';
import Lottery from './Lottery';
import CoinContainer from './CoinContainer';

class App extends Component {
   render() {
      return (
         <div>
            <Button />
            <Lottery />
            <CoinContainer />
         </div>
      );
   }
}

export default App;