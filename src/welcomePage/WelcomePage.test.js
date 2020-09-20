import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import WelcomePage from './WelcomePage'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import { getSummary } from '../helpers/apiCalls.js'
jest.mock('../helpers/apiCalls.js')

describe('WelcomePage', () => {
  let globalData, header, text, globalHeading, newConf, newRecov, newDeaths, newConfNum, newRecovNum, newDeathsNum, totalHeading, totConf, totDeaths, totRecov, totConfNum, totDeathsNum, totRecovNum;
  beforeEach(async () => {
    globalData = {
      "NewConfirmed": 100282,
      "TotalConfirmed": 1162857,
      "NewDeaths": 5658,
      "TotalDeaths": 63263,
      "NewRecovered": 15405,
      "TotalRecovered": 230845
    }

    getSummary.mockResolvedValue(globalData)

    render(
      <MemoryRouter>
        <WelcomePage global={globalData} />
      </MemoryRouter>
    )
    header = await screen.getByRole('heading', { name: /welcome/i })
    text = screen.getByText(/this placeholder text/i)

    globalHeading = screen.getByRole('heading', { name: /today's global stats/i })
    newConf = screen.getByText(/new confirmed:/i)
    newConfNum = screen.getByText(/100,282/i)

    newRecov = screen.getByText(/new deaths:/i)
    newRecovNum = screen.getByText(/15,405/i)

    newDeaths = screen.getByText(/new recovered:/i)
    newDeathsNum = screen.getByText(/5,658/i)

    totalHeading = screen.getByRole('heading', { name: /total/i })
    totConf = screen.getByText(/total confirmed:/i)
    totConfNum = screen.getByText(/1,162,857/i)

    totDeaths = screen.getByText(/total deaths:/i)
    totDeathsNum = screen.getByText(/63,263/i)

    totRecov = screen.getByText(/total recovered:/i)
    totRecovNum = screen.getByText(/230,845/i)
  })
  it('should display a welcome header', () => {
    expect(header).toBeInTheDocument()
  })
  it('should have some text stuffs below the header', () => {
    expect(text).toBeInTheDocument()
  })
  it('should have a heading for global stats', () => {
    expect(globalHeading).toBeInTheDocument()
  })
  it('should display new global stat categories', () => {
    expect(newConf).toBeInTheDocument()
    expect(newDeaths).toBeInTheDocument()
    expect(newRecov).toBeInTheDocument()
  })
  it('should display recent numbers with commas correctly placed', () => {
    expect(newConfNum).toBeInTheDocument()
    expect(newDeathsNum).toBeInTheDocument()
    expect(newRecovNum).toBeInTheDocument()
  })
  it('should display Total header', () => {
    expect(totalHeading).toBeInTheDocument()
  })
  it('should display total global stat categories', () => {
    expect(totConf).toBeInTheDocument()
    expect(totDeaths).toBeInTheDocument()
    expect(totRecov).toBeInTheDocument()
  })
  it('should display total numbers with commas correctly placed', () => {
    expect(totConfNum).toBeInTheDocument()
    expect(totDeathsNum).toBeInTheDocument()
    expect(totRecovNum).toBeInTheDocument()
  })

})