import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  background-color: red;
`

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(async() => {
    const res = await fetch('http://localhost:5000/api/questions/7')
    const data = await res.json()
    setMessage(data)
  }, [])

  return (
    <StyledApp>
      <div>lady gaga</div>
      {/* <div>{JSON.stringify(message)}</div> */}
      <div>{message.question_title}</div>
    </StyledApp>
  )
}
