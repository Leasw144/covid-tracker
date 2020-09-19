import React from 'react'
import './WelcomePage.css'

function WelcomePage(props) {
  console.log(props)
  let global = props.global
  if(props.global.NewConfirmed) {
    return (
      <section className="welcome-page">
        <h1>Welcome</h1>
        <p class='welcome-text'>This placeholder text is gonna be HUGE. You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! 
        <br /> <br />
        You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.
    <br /> <br />
        An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.
        </p>
        <h1>Today's Global Stats</h1>
    <p>New Confirmed: <span className="red">{global.NewConfirmed.toLocaleString()}</span></p>
        <p>New Deaths: <span className="red">{global.NewDeaths.toLocaleString()}</span></p>
        <p>New Recovered: <span className="green">{global.NewRecovered.toLocaleString()}</span></p>
    <h1>Total </h1>
        <p>Total Confirmed: <span className="red">{global.TotalConfirmed.toLocaleString()}</span></p>
        <p>Total Deaths: <span className="red">{global.TotalDeaths.toLocaleString()}</span></p>
        <p>Total Recovered: <span className="green">{global.TotalRecovered.toLocaleString()}</span></p>
    
  
      </section>
    )
    } else {
      return (
        <h1>hello world</h1>
      )
    }
}

export default WelcomePage