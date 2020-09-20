import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'

// describe('App component', () => {
//   let countriesData, globalData, history;
//   beforeEach(() => {
//     countriesData = {
//       "Country": "United States of America",
//       "CountryCode": "US",
//       "Slug": "united-states",
//       "NewConfirmed": 32129,
//       "TotalConfirmed": 275582,
//       "NewDeaths": 1161,
//       "TotalDeaths": 7087,
//       "NewRecovered": 0,
//       "TotalRecovered": 0,
//       "Date": "2020-04-05T06:37:00Z"
//     }

//   })
//   it('tests everything I guess.', () => { 
//     history = createMemoryHistory()
//     const { container, getByText } = render(
//       <Router history={history}>
//         <App />
//       </Router>
//     )
//     expect(container.innerHTML).toMatch('all countries')

//   })
// })

