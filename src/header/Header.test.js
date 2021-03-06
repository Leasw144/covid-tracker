import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  let title, logo;
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    title = screen.getByText('CoVid-Tracker')
    logo = screen.getByAltText('virus')
  })
  it('renders the title of the app in the Header', () => {
    expect(title).toBeInTheDocument()
  })
  it('should render the logo in the header', () => {
    expect(logo).toBeInTheDocument()
  })
})