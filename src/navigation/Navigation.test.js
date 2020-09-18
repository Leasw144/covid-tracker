import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navigation from './Navigation.js'
import { MemoryRouter } from 'react-router-dom'

describe('Navigation component', () => {
  let heading, thirdPartyHeading, countries, submit;
  beforeEach(() => {
    countries = ['Afghanistan', 'Albania']
    render (
      <MemoryRouter>
        <Navigation countries={countries}/>
      </MemoryRouter>
    ) 
    submit = screen.getByRole('button', { name: 'submit'})
    heading = screen.getByRole('heading', { name: 'Resources'})
    thirdPartyHeading = screen.getByRole('heading', {name: 'Third Party Sources'})
    
  })

  it('should render the Resources heading', () => {
    expect(heading).toBeInTheDocument()
    expect(thirdPartyHeading).toBeInTheDocument()
  })
  it('should render a submit button for countries', () => {
    expect(submit).toBeInTheDocument()
  })
})