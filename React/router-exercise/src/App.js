import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
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
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(dog =>
        dog.name.toLowerCase() === name.toLowerCase()
      );

      return <DogDetails {...props} dog={currentDog} />
    };

    return (
      <div className="App" >
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
