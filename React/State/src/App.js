import React, { Component } from 'react';
import Button from './Button';
import Lottery from './Lottery';

class App extends Component {
   render() {
      return (
         <div>
            <Button />
            <Lottery />
         </div>
      );
   }
}

export default App;