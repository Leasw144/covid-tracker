import React from 'react';
import './DetailsPage.css'
import eye from '../assets/eye.svg'

function DetailsPage(props) {
  console.log('your props', props)
  let countryStats = props.country
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
        <button type="button" className="card-btn" onClick={() => props.addToWatch(countryStats.Country)}>
          <img className='eye' src={eye} alt='virus' />
        </button>
      </div>
    </article>
  )
  } else {
    return (
      <h1>Soz</h1>
    )
  }
}

export default DetailsPage