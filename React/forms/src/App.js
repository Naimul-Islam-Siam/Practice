import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import BoxList from './BoxList';

class App extends Component {
   render() {
      return (
         <div>
            <ShoppingList />
            <BoxList />
         </div>
      );
   }
}

export default App;