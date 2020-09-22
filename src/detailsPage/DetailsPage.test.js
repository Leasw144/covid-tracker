import React from 'react';
import '@testing-library/react'
import { render, screen, fireEvent } from '@testing-library/react'
import DetailsPage from './DetailsPage.js'
import { MemoryRouter } from 'react-router-dom'
import { addToWatch } from '../app/App.js'

describe('DetailsPage', () => {
  let mockedCountry, mockedAddToWatch, mockedWatchList, addToWatchBtn;
  beforeEach(() => {
    mockedCountry = {
      "Country": "ALA Aland Islands",
      "CountryCode": "AX",
      "Slug": "ala-aland-islands",
      "NewConfirmed": 1,
      "TotalConfirmed": 2,
      "NewDeaths": 3,
      "TotalDeaths": 4,
      "NewRecovered": 5,
      "TotalRecovered": 6,
      "Date": "2020-04-05T06:37:00Z"
    }
    mockedAddToWatch = jest.fn();
    mockedWatchList = []
    render(
      <MemoryRouter>
        <DetailsPage country={mockedCountry} addToWatch={mockedAddToWatch} watchList={mockedWatchList}/>
      </MemoryRouter>
    )
    // mockedAddToWatch = addToWatch
    addToWatchBtn = screen.getByRole('img', { name: /Add to Watch/i })
  })
  it('should have the name of the country', () => {
    const countryHeader = screen.getByRole('heading', { name: /ALA Aland Islands \(ax\)/i })
    const recentsHeader = screen.getByRole('heading', { name: /recents/i })
    const overallHeader = screen.getByRole('heading', { name: /overall/i })
    expect(countryHeader).toBeInTheDocument()
    expect(recentsHeader).toBeInTheDocument()
    expect(overallHeader).toBeInTheDocument()
  })
  it('should have a heading for recent cases and overall cases', () => {
    const newConf = screen.getByText(/new confirmed cases:/i)
    const newDeaths = screen.getByText(/new reported deaths:/i)
    const newRecov = screen.getByText(/new recovered:/i)
    expect(newConf).toBeInTheDocument()
    expect(newDeaths).toBeInTheDocument()
    expect(newRecov).toBeInTheDocument()
  })
  it('should display the correct stats in Recents section', () => {
    const newConfNum = screen.getByText(/1/i)
    const newDeathsNum = screen.getByText(/2/i)
    const newRecovNum = screen.getByText(/3/i)
    expect(newConfNum).toBeInTheDocument()
    expect(newDeathsNum).toBeInTheDocument()
    expect(newRecovNum).toBeInTheDocument()
  })
  it('should display the correct stats in Total section', () => {
    const totConfNum = screen.getByText(/4/i)
    const totDeathsNum = screen.getByText(/5/i)
    const totRecovNum = screen.getByText(/6/i)
    expect(totConfNum).toBeInTheDocument()
    expect(totDeathsNum).toBeInTheDocument()
    expect(totRecovNum).toBeInTheDocument()
  })
  it('should an addToWatchList button', () => {
    expect(addToWatchBtn).toBeInTheDocument()
  })
  it('the addToWatch button should fire once when a user presses it', () => {
    fireEvent.click(addToWatchBtn)
    expect(mockedAddToWatch.mock.calls.length).toBe(1)
  })
})