import React, { Component } from 'react';

class Test extends Component {
   constructor(props) {
      super(props);

      this.state = {
         clickCount: 0
      };

      handleClick() {
         // the correct way
         this.setState((prevState, prevProps) => {
            return { clickCount: prevState.clickCount + prevProps.increment }
         }, () => {
            console.log(this.state.clickCount);
         });
      };
   }
}

// should not be done
this.setState({ clickCount: this.state.clickCount + this.props.increment });
// this will still work fine as setState is updating only one thing
// but setState is an asynchronous function, so it doesn't guarantee to work perfectly this away
// specially when there are multiple things to be updated
// so, the recommended way is the one showed in the handleClick method