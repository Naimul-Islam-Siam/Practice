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
               <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="username"
                  onChange={this.handleChange}
               />
               <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="email"
                  onChange={this.handleChange}
               />
               <input
                  type="password"
                  name="password"
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