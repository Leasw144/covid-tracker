import React from 'react';
import './DetailsPage.css'

function DetailsPage(props) {
  console.log('your props', props)
  let countryStats = props.country
  return (
    <article className="country-info">
      <h1>{countryStats.Country} ({countryStats.CountryCode})</h1>
    <p>New Confirmed Cases: {countryStats.NewConfirmed}</p>
    <p>New Reported Deaths: {countryStats.NewDeaths}</p>
    <p>New Recovered: {countryStats.NewRecovered}</p>
    <br/>
    <h2>Overall</h2>
    <p>Total Confirmed: {countryStats.TotalConfirmed}</p>
    <p>Total Deaths: {countryStats.TotalDeaths}</p>
    <p>Total Recovered: {countryStats.TotalRecovered}</p>

    </article>
  )
}

export default DetailsPage