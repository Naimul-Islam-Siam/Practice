import React, { Component } from 'react'
import axios from 'axios';
import "./ZenQuote.css";

class ZenQuote extends Component {
   constructor(props) {
      super(props);
      this.state = { quote: "", isLoaded: false };
   }

   componentDidMount() {
      axios.get("https://api.github.com/zen").then(response => {
         setTimeout(() => {
            this.setState({ quote: response.data, isLoaded: true })
         }, 2000);
      })
   }

   render() {
      return (
         <div>
            {this.state.isLoaded ? (
               <div>
                  <h1>Always Remember</h1>
                  <p>{this.state.quote}</p>
               </div>
            ) : (
                  <div className="loadingspinner"></div>
               )}
         </div>
      );
   }
};

export default ZenQuote;