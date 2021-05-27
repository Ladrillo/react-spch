import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import App from './src/components/App'
import '@testing-library/jest-dom/extend-expect'

test('werkz', () => { })

test('foo', async () => {
  render(<App />)
  expect(await screen.findByText('hello world')).toBeInTheDocument()
}, 1000)
