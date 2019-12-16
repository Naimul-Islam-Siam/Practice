import React, { Component } from 'react'

class Form extends Component {
   constructor(props) {
      super(props)
      this.state = { username: "", email: "", password: "" };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(evt) {
      this.setState({
         [evt.target.name]: evt.target.value
      })
   }

   handleSubmit(evt) {
      evt.preventDefault();
      alert(`username: ${this.state.username} email: ${this.state.email}`);
      this.setState({
         username: "", email: "", password: ""
      });
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="username">User Name: </label>
               <input
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.username}
                  placeholder="username"
                  onChange={this.handleChange}
               />

               <label htmlFor="email">E-mail: </label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  placeholder="email"
                  onChange={this.handleChange}
               />

               <label htmlFor="password">Password: </label>
               <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.handleChange}
               />

               <button>Submit</button>
            </form>
         </div>
      );
   }
}

export default Form;