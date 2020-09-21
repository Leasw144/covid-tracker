import React from 'react';
import '@testing-library/react'
import { render, screen } from '@testing-library/react'
import DetailsPage from './DetailsPage.js'
import { MemoryRouter } from 'react-router-dom'

describe('DetailsPage', () => {
  let mockedCountry, mockedAddToWatch, mockedWatchList;
  beforeEach(() => {
    mockedCountry = {
      "Country": "ALA Aland Islands",
      "CountryCode": "AX",
      "Slug": "ala-aland-islands",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    }
    
    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    )



  })
})