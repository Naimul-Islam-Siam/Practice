import React, { Component } from "react";
import Message from "./Message";

class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <h1>Contact!!!</h1>
        <Message>
          <h3>It's Contact Page</h3>
        </Message>
        <p>PLEASE DO NOT CONTACT US EVER</p>
      </div>
    );
  }
}
export default Contact;
