import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  background-color: red;
`

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(async() => {
    const res = await axios.get('http://localhost:5000/api')
    setMessage(res.data.message)
  }, [])

  return (
    <StyledApp>
      <div>lady gaga</div>
      <div>{message}</div>
    </StyledApp>
  )
}
