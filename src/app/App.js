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
      notice: '',
      watchList: []
    }
  }

  componentDidMount = async () => {
    try {
      const summary = await getSummary()
      this.setState({allCountries: summary.Countries, global: summary.Global })
    } catch(error) {
      this.setState({notice: error})
    }
  }

  goToCountry = (value) => {
    const country = this.state.allCountries.find(country => country.Country === value)
    this.setState({ countryOfInterest: country })
  }

  addToWatch = (value) => {
    const watchedCountry = this.checkDups(value)
    if(!watchedCountry) {
      const country = this.state.allCountries.find(country => country.Country === value)
      this.setState({ watchList: [...this.state.watchList, country]})
      this.setState({ notice: 'Added to Watch List'})
    } else {
      return false
    }
  }

  checkDups(value) {
    if (this.state.watchList.length > 0) {
      const country = this.state.watchList.find(country => country.Country === value)
      return country
    } 
  }
  render() {
    return (
      <main className="App">
        <Header />       
        <section className="main-display">
          <Navigation 
            countries={this.state.allCountries} 
            goToCountry={this.goToCountry}
          />           
          <div className="content">
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
                      addToWatch={this.addToWatch}
                      watchList={this.state.watchList}
                    />
                  )
                }}
              />
              <Route 
                exact path='/allcountries'
                render={() => {
                  return (
                    <AllCountries 
                      countries={this.state.allCountries}
                      goToCountry={this.goToCountry} 
                      addToWatch={this.addToWatch}
                      watchList={this.state.watchList}
                      notice={this.state.notice}
                    />
                  )
                }}
              />
              <Route 
                exact path='/watchlist'
                render={() => {
                  return (
                    <AllCountries
                      countries={this.state.watchList}
                      goToCountry={this.goToCountry} 
                      addToWatch={this.addToWatch}
                    />
                  )
                }}
              />
              <Route 
                render={() => {
                  return(
                    <div>
                      <h1>404! Sorry try again!</h1>
                    </div>
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
