import React from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whisky loves eating popcorn.",
          "Whisky is a terrible guard dog.",
          "Whisky wants to cuddle with you."
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has so much energy.",
          "Hazel is highly intelligent",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog.",
          "Tubby does not like walks or exercise",
          "Tubby loves food."
        ]
      }
    ]
  }

  render() {
    return (
      <div className="App" >
        <NavBar dogs={this.props.dogs} />
        <Routes dogs={this.props.dogs} />
      </div>
    );
  }
}

export default App;
