import React from 'react';
import { render, screen, waitFor, fireEvent, getByText } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'


describe('App component', () => {
  it('should render the selected country\'s information', async () => {
    let countriesData, globalData, renderedApp;
    countriesData = [{
    "Country": "United States of America",
    "CountryCode": "US",
    "Slug": "united-states",
    "NewConfirmed": 32129,
    "TotalConfirmed": 275582,
    "NewDeaths": 1161,
    "TotalDeaths": 7087,
    "NewRecovered": 0,
    "TotalRecovered": 0,
        "Date": "2020-04-05T06:37:00Z"
      },
      {
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 18,
      "TotalConfirmed": 299,
      "NewDeaths": 1,
      "TotalDeaths": 7,
      "NewRecovered": 0,
      "TotalRecovered": 10,
      "Date": "2020-04-05T06:37:00Z"
    }]

      renderedApp = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    // const { getByRole } = renderedApp
    const dropdown = screen.getByRole('combobox')
    const submitBtn = screen.getByRole('button', { name: /submit/i })
    const afghanistan = await waitFor(() => screen.getByText('Afghanistan'))
    fireEvent.change(dropdown, { target: { value: 'Afghanistan'}})
    // const AFHeader = await waitFor(() => screen.getByRole('heading', { name: /afghanistan \(af\)/i }))
    fireEvent.click(submitBtn)

    const AFHeader = screen.getByText('Recents', {exact: false})

    expect(afghanistan).toBeInTheDocument()
    expect(AFHeader).toBeInTheDocument()
  })
})

