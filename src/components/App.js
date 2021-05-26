import React, { useEffect, useState } from 'react'
import axios from 'axios'

async function foo() {
  return 7
}

export default function App() {
  const [numba, setnumba] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(async() => {
    const five = await foo()
    setnumba(five)
  }, [])

  useEffect(async() => {
    const res = await axios.get('http://localhost:5000/api')
    setMessage(res.data.message)
  }, [])

  return (
    <div>
      <div>{numba}</div>
      <div>{message}</div>
    </div>
  )
}
