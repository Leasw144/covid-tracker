import React, { Component } from 'react';
import './AllCountries.css'
import virus from '../assets/virus.svg';
import { Link } from 'react-router-dom'

function AllCountries (props) {
  let counter = 0
  let countries = props.allCountries
  const countryCards = countries.map(country => {
    return (
      <div key={counter++} className="card">
        <section className="recent-sect">
        <h1 className="country-name">{country.Country}<span className="country-code">({country.CountryCode})</span></h1>
          <h2>New Confirmed: <span className="integer">{country.NewConfirmed}</span></h2>
          <h2>New Deaths: <span className="integer">{country.NewDeaths}</span></h2>
          <h2>New Recovered: <span className="integer">{country.NewRecovered}</span></h2>
        </section>
        <section className="buttons">
          <button type="button" className="watch-list">
            <img src={virus} className="image" alt='virus' />
          </button>
          <Link to='/details'>
            <button type='button' onClick={() => props.goToCountry(country.Country)}>
              {/* <img src='' alt='details' /> */}
              find more stats
            </button>
          </Link>
        </section>

      </div>
    )
  })
  return (
    <div>
      {countryCards}
    </div>
  )
}

export default AllCountries