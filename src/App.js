import "./App.css";
import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (  
        <Router basename="/">
          <div>
          <Navbar/>
          <Switch>
          <Route exact path="/"><News key="general" pageSize={12} country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={12} country="in" category='business' /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={12} country="in" category='entertainment' /></Route>
            <Route exact path="/general"><News key="general" pageSize={12} country="in" category='general' /></Route>
            <Route exact path="/health"><News key="health" pageSize={12} country="in" category='health' /></Route>
            <Route exact path="/science"><News key="science" pageSize={12} country="in" category='science' /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={12} country="in" category='sports' /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={12} country="in" category='technology' /></Route> 
          </Switch>
          </div>
        </Router>
            
    );
  }
}

export default App;
