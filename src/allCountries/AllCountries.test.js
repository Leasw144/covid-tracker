import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import AllCountries from './AllCountries.js'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import { getSummary } from '../helpers/apiCalls.js'
jest.mock('../helpers/apiCalls.js')

describe('AllCountries', () => {
  let mockedCountries, name1, name2, code1, code2, eyeBtn, infoBtn, newConf, newDeaths, newRecovered, mockAddToWatch, mockedGoToCountry, mockedWatchList, mockedNotice;
  beforeEach(() => {
  mockedCountries = [
    {
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
    }
  ]

  getSummary.mockResolvedValue(mockedCountries)

  mockAddToWatch = jest.fn()
  mockedGoToCountry = jest.fn()
  mockedWatchList = []
  mockedNotice = ''
  render(
    <MemoryRouter>
      <AllCountries 
        countries={mockedCountries}
        addToWatch={mockAddToWatch} 
        goToCountry={mockedGoToCountry}
        watchList={mockedWatchList}
        notice={mockedNotice}
      />
    </MemoryRouter>
  )

    name1 = screen.getByText("ALA Aland Islands")
    name2 = screen.getByText("Albania")
    code1 = screen.getByText(/(ax)/i)
    code2 = screen.getByText(/(ab)/i)
    eyeBtn = screen.getAllByRole('button', { name: /eye/i })
    infoBtn = screen.getAllByRole('img', { name: /details/i })
    newConf = screen.getByRole('heading', { name: /new confirmed: 0/i })
    newDeaths = screen.getByRole('heading', { name: /new deaths: 0/i })
    newRecovered = screen.getByRole('heading', { name: /new recovered: 0/i })
  })
    it('should render the correct name of the country', async () => {
    expect(name1).toBeInTheDocument()
    expect(name2).toBeInTheDocument()
  })
  it('each country should have their country code displayed', () => {
    expect(code1).toBeInTheDocument()
    expect(code2).toBeInTheDocument()
  })
  it('should render buttons on the card equal to countries', () => {
    expect(eyeBtn).toHaveLength(2)
    expect(infoBtn).toHaveLength(2)
  })
  it('should render the correct stats of the country', () => {
    expect(newConf).toBeInTheDocument()
    expect(newDeaths).toBeInTheDocument()
    expect(newRecovered).toBeInTheDocument()
  })
  it('should be able to add a country to the watch list', () => {
    fireEvent.click(eyeBtn[0])
    expect(mockAddToWatch.mock.calls.length).toBe(1)
  })
  it('should take a user to the info page of a given country', () => {
    fireEvent.click(infoBtn[0])
    expect(mockedGoToCountry.mock.calls.length).toBe(1)
  })
})