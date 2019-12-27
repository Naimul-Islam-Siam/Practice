import React, { Component } from "react";
import Message from './Message';

class About extends Component {
  render() {
    return (
      <div className='About'>
        <h1>About!!!</h1>
        <p>This is the about page...</p>

        <Message>
          <h1>I'm about page</h1>
        </Message>
      </div>
    );
  }
}
export default About;
