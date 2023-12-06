import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { GlobalStyle } from './conponents/global-style/global-style'
import Login from "../src/pages/login/login"


function App() {

  return (
    <GlobalStyle>
      <Login/>
    </GlobalStyle>
  )
}

export default App
