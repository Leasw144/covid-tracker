import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, getAllByRole } from '@testing-library/react'
import Navigation from './Navigation.js'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'

describe('Navigation component', () => {
  let navHeading, allCountryHeading, watchListHeading, searchHeading,thirdPartyHeading, countries, submit, allCountriesBtn, homeBtn, link1, link2, link3, countriesData;
  beforeEach(() => {
    countries = ['Afghanistan', 'Albania']
    render (
      <MemoryRouter>
        <Navigation countries={countries}/>
      </MemoryRouter>
    ) 
    submit = screen.getByRole('button', { name: 'submit'})
    navHeading = screen.getByRole('heading', { name: 'Navigation'})

    allCountryHeading = screen.getByRole('heading', { name: 'Go To All Countries Stats'})

    allCountriesBtn = document.querySelector('a')

    watchListHeading = screen.getByRole('heading', { name: 'Go To Your Watch List'})

    searchHeading = screen.getByRole('heading', { name: 'Search by Country'})

    
    thirdPartyHeading = screen.getByRole('heading', {name: 'Third Party Sources'})
    link1 = screen.getByText('Top Stories')
    link2 = screen.getByText('CDC Information on CoVid-19')
    link3 = screen.getByText('Official Covid Song of 2020')
    
    homeBtn = screen.getByAltText('virus')
  })

  it('should render all headings', () => {
    expect(navHeading).toBeInTheDocument()
    expect(allCountryHeading).toBeInTheDocument()
    expect(searchHeading).toBeInTheDocument()
    expect(thirdPartyHeading).toBeInTheDocument()
  })
  it('should render a submit button and return home button', () => {
    expect(submit).toBeInTheDocument()
    expect(homeBtn).toBeInTheDocument()
  })
  it('should render links to other sites', () => {
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(link3).toBeInTheDocument()
  })
  it()
})