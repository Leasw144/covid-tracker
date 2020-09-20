import React from 'react';
import './DetailsPage.css'
import eye from '../assets/eye.svg'
import PropTypes from 'prop-types'

function DetailsPage(props) {
  console.log('your props', props)
  let watched;
  let countryStats = props.country
  if(props.watchList) {
    watched = props.watchList.find(country => country.Country === countryStats.Country)
  }
  if (countryStats.CountryCode) {
  return (
    <article className="country-info">
      <h1 className="country-name">{countryStats.Country} ({countryStats.CountryCode})</h1>
      <h2 class='headline'>Recents</h2>
      <div className="recent-group">
        <p>New Confirmed Cases: 
          <span class='red'>{countryStats && countryStats.NewConfirmed.toLocaleString()}</span>
        </p>
        <p>New Reported Deaths: <span class='red'>{countryStats.NewDeaths.toLocaleString()}</span></p>
        <p>New Recovered: <span class='red'>{countryStats.NewRecovered.toLocaleString()}</span></p>
      </div>
    <br/>
      <h2 class='headline'>Overall</h2>
      <p>Total Confirmed: <span class='green'>{countryStats.TotalConfirmed.toLocaleString()}</span></p>
      <p>Total Deaths: <span class='green'>{countryStats.TotalDeaths.toLocaleString()}</span></p>
      <p>Total Recovered: <span class='green'>{countryStats.TotalRecovered.toLocaleString()}</span></p>
      <br />
      <div className='eye-area'>
        <h4>Add this Country to Your Watch List</h4>
          <div className={watched ? 'active' : null} >
            <button type="button" className='card-btn active' onClick={() => props.addToWatch(countryStats.Country)}>
              <img className='eye' src={eye} alt='virus' />
            </button>
          </div>
      </div>
    </article>
  )
  } else {
    return (
      <h1>Soz</h1>
    )
  }
}

DetailsPage.propTypes = {
  country: PropTypes.object.isRequired,
  addToWatch: PropTypes.func.isRequired,
  watchList: PropTypes.array.isRequired
}

export default DetailsPage