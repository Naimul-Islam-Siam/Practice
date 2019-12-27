import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

class FoodSearch extends Component {
   constructor(props) {
      super(props);
      this.state = { query: "" };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(evt) {
      this.setState({
         [evt.target.name]: evt.target.value
      });
   }

   handleClick() {
      this.props.history.push(`/food/${this.state.query}`);
   }

   handleSubmit() {
      this.handleClick();
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <label htmlFor="query">Search Food: </label>
            <input
               type="text"
               name="query"
               id="query"
               placeholder="search for a food"
               value={this.state.query}
               onChange={this.handleChange}
            />
            <button onClick={this.handleClick}>Submit</button>
            {/* <Link to={`/food/${this.state.query}`}>Go!</Link> */}
         </form>
      );
   }
};

export default FoodSearch;