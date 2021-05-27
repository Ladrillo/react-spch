import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import App from './src/components/App'
import '@testing-library/jest-dom/extend-expect'

afterEach(() => {
  document.body.innerHTML = ''
})

test('sanity', () => { })

test('lady gaga', async () => {
  render(<App />)
  expect(screen.queryByText('lady gaga')).toBeInTheDocument()
}, 1000)

test('hello world', async () => {
  render(<App />)
  expect(await screen.findByText('hello world')).toBeInTheDocument()
}, 1000)
