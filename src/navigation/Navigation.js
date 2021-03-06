import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'
import virus from '../assets/virus.svg'
import PropTypes from 'prop-types'

class Navigation extends Component {
  constructor(props) {
    super()
    this.state = {
      country: 'Afghanistan'
    }
  }

  findCountry = () => {
    this.props.country = this.state.goToCountry
  }

  handleChange = (e) => {
    this.setState({ country: e.target.value })
  }
  
  render() {
    let counter = 0
    let countryNames = this.props.countries.reduce((countryList, country) => {
      countryList.push(country.Country)
      return countryList
    }, [])
    let renderedCountryList = countryNames.map(country => {
      return (
        <option key={counter++} value={country}>{country}</option>
      )
    })
    return (
      <article className='nav-bar'>
        <h2>Navigation</h2>
        <h4>Go To All Countries Stats</h4>
        <Link to='/allcountries'>
          <button type='button' className='nav-btn all-countries'>Go to All Countries</button>
        </Link>
        <h4>Go To Your Watch List</h4>
        <Link to='/watchlist'>
          <button className='nav-btn' type='button' >Go to Watch List</button>
        </Link>
        <h4>Search by Country</h4>
        <form className='form' >
          <select 
            className='combobox'
            name='country-select' 
            value={this.state.goToCountry} 
            onChange={this.handleChange}
          >  
            {renderedCountryList}
          </select>
          <Link to='/details'>
            <button type='button' className='nav-btn submit' onClick={() => this.props.goToCountry(this.state.country)}>submit</button>
          </Link>
        </form>
        <h2>Third Party Sources</h2>
        <div className='nav-resource'>
          <a href= 'https://www.google.com/search?q=coronavirus&rlz=1C5CHFA_enUS879US879&oq=coron&aqs=chrome.0.0j69i57j0l3j69i61j69i60l2.1522j1j4&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NMwySk6OL8zJecTozS3w8sc9YSmnSWtOXmO04eIKzsgvd80rySypFNLjYoOyVLgEpVB1ajBI8XOhCvHsYmLzSSxJLS5ZxMrtnF-Un5dYlllUWgwAOiVTd3YAAAA'>Top Stories</a>
          <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'>CDC Information on CoVid-19</a>
          <a href='https://www.youtube.com/watch?v=RYUe9XA1fQQ&list=LLIqzPn9ly0xhzdF8HfC6bBw&index=33&ab_channel=JeffNelson'> Official Covid Song of 2020</a>
        </div>
        <Link to='/'>
          <button className='rtrn-btn' type='button'>
            <img src={virus} alt='virus' />
          </button>
        </Link>
        
      </article>
    )
  }
}

Navigation.propTypes = {
  countries: PropTypes.array,
  goToCountry: PropTypes.func.isRequired
}
export default Navigation