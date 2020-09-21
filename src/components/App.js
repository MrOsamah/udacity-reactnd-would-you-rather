import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Poll from './Poll';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
      <div className="App">
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/questions/:id" component={Poll}/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
