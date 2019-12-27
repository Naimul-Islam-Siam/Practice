// ====================================================
// IF YOU ARE LOOKING FOR THE 'fake' ROUTING EXAMPLE...
// I MOVED THE CODE INTO FakeRouting.js
// ====================================================
import React, { Component } from "react";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Food from './Food';
import FoodSearch from "./FoodSearch";
import NavBar from "./NavBar";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <nav className="App-nav"> */}
        {/* NavLink is better than Link for nav as NavLink can have activeClassName */}
        {/* <NavLink exact activeClassName="active-link" to="/">About</NavLink> */}
        {/* <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink> */}
        {/* <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink> */}
        {/* </nav> */}
        {/* <Switch> */}
        {/* <Route exact path="/" component={About} /> */}
        {/* if Component has props it's better to use "render" instead of "component"  */}
        {/* "render" only renders and reuse the existing Component whenever it's clicked */}
        {/* "component" not just renders but also instantiate the Component and goes through the whole lifecycle every time*/}
        {/* <Route exact path="/dog" render={() => <Dog name="Muffin" />} /> */}
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* </Switch> */}
        <NavBar />
        <Switch>
          <Route
            exact
            path="/food/:name"
            render={routerProps => <Food {...routerProps} />}
          />

          <Route
            exact
            path="/"
            component={FoodSearch}
          />

          <Route
            render={() => <h1>Page Not Found</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
