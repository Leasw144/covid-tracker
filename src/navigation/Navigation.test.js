import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from './Navigation.js'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('Navigation component', () => {
  let navHeading, allCountryHeading, searchHeading,thirdPartyHeading, mockedCountries, submit, allCountriesBtn, homeBtn, link1, link2, link3, mockedGoToCountry, watchListHeading;
  beforeEach(() => {
    mockedCountries = [{
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
    },
    {
      "Country": "Albania",
      "CountryCode": "AB",
      "Slug": "albania",
      "NewConfirmed": 29,
      "TotalConfirmed": 333,
      "NewDeaths": 3,
      "TotalDeaths": 20,
      "NewRecovered": 10,
      "TotalRecovered": 99,
      "Date": "2020-04-05T06:37:00Z"
    }]
    mockedGoToCountry = jest.fn()

    render (
      <MemoryRouter>
        <Navigation countries={mockedCountries} goToCountry={mockedGoToCountry}/>
      </MemoryRouter>
    ) 
    navHeading = screen.getByRole('heading', { name: 'Navigation'})
    allCountryHeading = screen.getByRole('heading', { name: 'Go To All Countries Stats'})
    watchListHeading = screen.getByRole('heading', { name: 'Go To Your Watch List'})
    searchHeading = screen.getByRole('heading', { name: 'Search by Country'})
    thirdPartyHeading = screen.getByRole('heading', {name: 'Third Party Sources'})
    submit = screen.getByRole('button', { name: 'submit'})
    
  })
  
  it('should render all headings', () => {
    expect(navHeading).toBeInTheDocument()
    expect(allCountryHeading).toBeInTheDocument()
    expect(searchHeading).toBeInTheDocument()
    expect(thirdPartyHeading).toBeInTheDocument()
    expect(watchListHeading).toBeInTheDocument()
  })
  it('should render a submit button and return home button', () => {
    allCountriesBtn = screen.getByRole('button', { name: /go to all countries/i })
    homeBtn = screen.getByAltText('virus')
    expect(submit).toBeInTheDocument()
    expect(homeBtn).toBeInTheDocument()
    expect(allCountriesBtn).toBeInTheDocument()
  })
  it('should render links to other sites', () => {
    link1 = screen.getByText('Top Stories')
    link2 = screen.getByText('CDC Information on CoVid-19')
    link3 = screen.getByText('Official Covid Song of 2020')
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(link3).toBeInTheDocument()
  })
  it('should take a user to the country of their choosing', () => {
    fireEvent.click(submit)
    expect(mockedGoToCountry.mock.calls.length).toBe(1)
  })
})