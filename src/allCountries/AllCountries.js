import React from 'react';
import './AllCountries.css'
import eye from '../assets/eye.svg';
import info from '../assets/info.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AllCountries (props) {
  let countries, countryCards;
  let counter = 0
  if(props.countries) {
    countries = props.countries
    console.log('watchlist', props.watchList)
    countryCards = countries.map(country => {
      let watched;
      if(props.watchList) {
        watched = props.watchList.find(watched => country.Country === watched.Country);
      }
      return (
        <div key={counter++} className="card">
          <section className="recent-sect">
          <h1 className="country-name">{country.Country}<span className="country-code">({country.CountryCode})</span></h1>
            <h2 className='stat'>New Confirmed: <span className="integer">{country.NewConfirmed.toLocaleString()}</span></h2>
            <h2 className='stat'>New Deaths: <span className="integer">{country.NewDeaths.toLocaleString()}</span></h2>
            <h2 className='stat'>New Recovered: <span className="integer">{country.NewRecovered.toLocaleString()}</span></h2>
          </section>
          <section className="button-holder">
            <div className={watched ? 'active' : null}>
              <button type="button" className='card-btn' onClick={() => props.addToWatch(country.Country)}>
                <img src={eye} alt='eye' />
              </button>
            </div>   
            <Link to='/details'>
              <button className="card-btn" type='button' onClick={() => props.goToCountry(country.Country)}>
                <img  src={info} alt='details' />
              </button>
            </Link>
          </section>
        </div>
      )
    })
  } else {
    countryCards = <h1> Error finding countries </h1>
    return countryCards
  }
  return (
    <div>
      {countryCards.length > 0 ? countryCards : <h1>Whoops! All Berries!</h1>}
    </div>
  )
}

AllCountries.propTypes = {
  countries: PropTypes.array,
  goToCountry: PropTypes.func,
  addToWatch: PropTypes.func,
  watchList: PropTypes.array,
  notice: PropTypes.string
}
export default AllCountries