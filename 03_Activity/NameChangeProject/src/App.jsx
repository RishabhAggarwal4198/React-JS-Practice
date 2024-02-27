import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloMsg from './HelloMsg'



function App() {
 
  return (
    <>
      <HelloMsg userName="Keshav"   textColor = "red" />
      <HelloMsg userName="Sachin"   textColor = "blue" />
    </>
  )
}


export default App
