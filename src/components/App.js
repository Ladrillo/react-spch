import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  background-color: red;
`

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(async() => {
    const res = await axios.get('http://localhost:5000/api/questions/7')
    setMessage(res.data)
  }, [])

  return (
    <StyledApp>
      <h1>lady gaga</h1>
      <h3>investigating Codegrade</h3>
      This is the flow students are used to
      {/* <div>{JSON.stringify(message)}</div> */}
      <h4>{message.question_title}</h4>
    </StyledApp>
  )
}
