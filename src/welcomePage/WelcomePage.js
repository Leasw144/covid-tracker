import React from 'react'
import './WelcomePage.css'

function WelcomePage(props) {
  console.log(props)
  let global = props.global
  if(props.global.NewConfirmed) {
    return (
      <section className="welcome-page">
        <h1>Today's Global Stats</h1>
    <p>New Confirmed: <span className="red">{global.NewConfirmed.toLocaleString()}</span></p>
        <p>New Deaths: <span className="red">{global.NewDeaths.toLocaleString()}</span></p>
        <p>New Recovered: <span className="green">{global.NewRecovered.toLocaleString()}</span></p>
    <h1>Total </h1>
        <p>Total Confirmed: <span className="red">{global.TotalConfirmed.toLocaleString()}</span></p>
        <p>Total Deaths: <span className="red">{global.TotalDeaths.toLocaleString()}</span></p>
        <p>Total Recovered: <span className="green">{global.TotalRecovered.toLocaleString()}</span></p>
    
    <p>{}</p>
      </section>
    )
    } else {
      return (
        <h1>hello world</h1>
      )
    }
}

export default WelcomePage