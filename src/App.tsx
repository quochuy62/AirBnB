import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { GlobalStyle } from './conponents/global-style/global-style'
import  Header  from '../src/templates/home/header/header'


function App() {

  return (
    <GlobalStyle>
     <Header/>
    </GlobalStyle>
  )
}

export default App
