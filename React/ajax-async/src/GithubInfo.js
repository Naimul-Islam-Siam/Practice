import React, { Component } from 'react'
import axios from 'axios';
import './GithubInfo.css';

class GithubInfo extends Component {
   constructor(props) {
      super(props);

      this.state = { imgUrl: '', name: '' };
   }

   async componentDidMount() {
      let url = `https://api.github.com/users/${this.props.userName}`;
      let response = await axios.get(url);
      let data = response.data
      this.setState({ imgUrl: data.avatar_url, name: data.name });
   }

   render() {
      return (
         <div>
            <h4>Name: {this.state.name}</h4>
            <img src={this.state.imgUrl} alt={this.state.name} />
         </div>
      );
   }
};

export default GithubInfo;