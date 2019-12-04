import React, { Component } from 'react';
import Button from './Button';
import Lottery from './Lottery';
import CoinContainer from './CoinContainer';
import ButtonList from './ButtonList';

class App extends Component {
   render() {
      return (
         <div>
            <Button />
            <Lottery />
            <CoinContainer />
            <ButtonList />
         </div>
      );
   }
}

export default App;