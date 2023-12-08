import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { GlobalStyle } from './conponents/global-style/global-style'
import Login from "../src/pages/login/login"
import Register from "../src/pages/register/register"

function App() {

  return (
    <GlobalStyle>
     <Register/>
    </GlobalStyle>
  )
}

export default App
