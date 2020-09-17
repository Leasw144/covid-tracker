import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';

class Navigation extends Component {
  constructor(props) {
    super()
    this.state = {
      goToCountry: ''
    }
  }

  // componentDidMount() {
  //   this.setState({ goToCountry:})
  // }

  handleChange(e) {
    this.setState({ goToCountry: [e.target.value] })
  }

  render() {
    let countryNames = this.props.countries.reduce((countryList, country) => {
      countryList.push(country.Country)
      return countryList
    }, [])

    let renderedCountryList = countryNames.map(country => {
      return (
        <option value={country}>{country}</option>
      )
    })
    return (
      <article className='nav-bar'>
        <h2>Resources</h2>


        <form className='form' >
          <select 
            name='country-select' 
            value={this.state.goToCountry} 
            onChange={this.handleChange}
          >
            {renderedCountryList}
          </select>
          <Link to='/details'>
            <button type='button' className='submit'>submit</button>
          </Link>
        </form>


        <h2>Third Party Sources</h2>
          <div className='nav-resource'>

            <a href= 'https://www.google.com/search?q=coronavirus&rlz=1C5CHFA_enUS879US879&oq=coron&aqs=chrome.0.0j69i57j0l3j69i61j69i60l2.1522j1j4&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NMwySk6OL8zJecTozS3w8sc9YSmnSWtOXmO04eIKzsgvd80rySypFNLjYoOyVLgEpVB1ajBI8XOhCvHsYmLzSSxJLS5ZxMrtnF-Un5dYlllUWgwAOiVTd3YAAAA'>Top Stories</a>
            <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'>CDC Information on CoVid-19</a>
              <a href='https://www.youtube.com/watch?v=RYUe9XA1fQQ&list=LLIqzPn9ly0xhzdF8HfC6bBw&index=33&ab_channel=JeffNelson'> Official Covid Song of 2020</a>
          </div>
        
      </article>
    )
  }
}

export default Navigation