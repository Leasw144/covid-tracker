import React, { Component } from 'react';
import PropTypes from '../../node_modules/prop-types/prop-types';
import { Route, Switch, Redirect } from 'react-router-dom'
import logo from '../assets/logo.svg';
import './App.css';

import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import DetailsPage from '../detailsPage/DetailsPage'
import { getSummary } from '../helpers/apiCalls'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      allCountries: [],
      global: {},
      countryOfInterest:'',
      error: ''
    }
  }

  componentDidMount = async () => {
    console.log('app mounted')
    try {
      const summary = await getSummary()
      console.log('summary', summary)
      this.setState({allCountries: summary.Countries, global: summary.Global })
      console.log(this.state)
    } catch(error) {
      this.setState({error: error})
    }
  }

  render() {
    return (

      <main className="App">
        <Header />
        
        <section className="main-display">
          <Navigation countries={this.state.allCountries} country={this.state.countryOfInterest}/>
          <div className="content">
            <Switch>
              <Route 
                exact path='/details' 
                render={() => {
                  return (
                    <DetailsPage
                      country='this.state.countryOfInterest'
                    />
                  )
                }}
              />

            </Switch>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
