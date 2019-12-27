import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      alert("Logged In");
      this.props.history.push("/food/salmon");
   }

   render() {
      return (
         <div className="NavBar">
            <button onClick={this.handleClick}>Log in</button>
            <button onClick={this.props.history.goBack}>Go Back</button>
         </div>
      );
   }
};

export default withRouter(NavBar);