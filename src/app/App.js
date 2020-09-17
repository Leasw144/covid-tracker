import React, { Component } from 'react';
import PropTypes from '../../node_modules/prop-types/prop-types';
import { Route, Switch, Redirect } from 'react-router-dom'
import logo from '../assets/logo.svg';
import './App.css';

import Header from '../header/Header'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      allCountries: []
    }
  }

  render() {
    return (

      <main className="App">
        <Header />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            FUCKING HERE WE FUCKING GO
          </a>
      </main>
    );
  }
}

export default App;
