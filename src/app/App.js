import React, { Component } from 'react';
import PropTypes from '../../node_modules/prop-types/prop-types';
import { Route, Switch, Redirect } from 'react-router-dom'
import logo from '../assets/logo.svg';
import './App.css';

import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import DetailsPage from '../detailsPage/DetailsPage'
import WelcomePage from '../welcomePage/WelcomePage'
import AllCountries from '../allCountries/AllCountries.js'
import { getSummary } from '../helpers/apiCalls'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      allCountries: [],
      global: {},
      countryOfInterest:{},
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
  goToCountry = (value) => {
    const country = this.state.allCountries.find(country => country.Country === value)
  
    this.setState({ countryOfInterest: country })


  }

  render() {
    return (

      <main className="App">
        <Header />
        
        <section className="main-display">
          <Navigation 
            // key='1'
            countries={this.state.allCountries} 
            goToCountry={this.goToCountry}/>
          <div className="content">
              {/* <h1>hello world</h1> */}
            <Switch>
              <Route 
                exact path='/' 
                render={() => {
                  return (
                   <WelcomePage global={this.state.global}/>
                  )
                }} 
              />
              <Route 
                exact path='/details' 
                render={() => {
                  return (
                    <DetailsPage
                      country={this.state.countryOfInterest}
                    />
                  )
                }}
              />
            <Route 
              exact path='/allcountries'
              render={() => {
                return (
                  <AllCountries 
                    allCountries={this.state.allCountries}
                    goToCountry={this.goToCountry} />
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
