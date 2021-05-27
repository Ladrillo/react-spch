import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import React from 'react'
import App from './src/components/App'
import '@testing-library/jest-dom/extend-expect'

test('werkz', () => { })

test('foo', async () => {
  render(<App />)
  // await waitFor(() => screen.getByText('hello world!'))
  // expect(screen.getByText('hello world!')).toHaveTextContent('hello world!')
}, 1000)
