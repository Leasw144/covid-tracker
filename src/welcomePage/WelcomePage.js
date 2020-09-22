import React from 'react'
import './WelcomePage.css'
import eye from '../assets/eye.svg'
import info from '../assets/info.svg'
import PropTypes from 'prop-types'

function WelcomePage(props) {
  let global = props.global
  if(props.global.NewConfirmed) {
    return (
      <section className="welcome-page">
        <h1>Welcome</h1>
        <p className='welcome-text'>Welcome to Covid-Track. This app tracks new and total cases of all covid cases by country.</p>
        <hr/>
        <p>To navigate the site, please use the navigation bar found on the left hand side. Using the, "Go To All Countries" page will display all countries and their recent stats. Clicking the <span><img className='smol-img' src={eye} alt='eye' /></span> icon on a country will add that country to your "Watch List" which can be accessed via the Navigation bar. clicking the <span><img className='smol-img' src={info} alt='info' /></span> icon will take you to the countrys full details page where you can find total cases for the country. 
        <br />
        </p>
        <div className='global-stats'>
        <h1>Today's Global Stats</h1>
          <p>New Confirmed: <span className="red">{global.NewConfirmed.toLocaleString()}</span></p>
          <p>New Deaths: <span className="red">{global.NewDeaths.toLocaleString()}</span></p>
          <p>New Recovered: <span className="green">{global.NewRecovered.toLocaleString()}</span></p>
          <h1>Total </h1>
          <p>Total Confirmed: <span className="red">{global.TotalConfirmed.toLocaleString()}</span></p>
          <p>Total Deaths: <span className="red">{global.TotalDeaths.toLocaleString()}</span></p>
          <p>Total Recovered: <span className="green">{global.TotalRecovered.toLocaleString()}</span></p>
        </div>
      </section>
    )
  } else {
    return (
      <h1 className="welcome-page">Please wait one moment. If the page does not load, please refresh</h1>
    )
  }
}

WelcomePage.propTypes = {
  global: PropTypes.object.isRequired
}

export default WelcomePage