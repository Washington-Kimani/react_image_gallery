import React, { useState } from 'react'
import Gallery from './component/Gallery'
import { FaCode } from "react-icons/fa";

function App() {

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Picture Gallery</h1>
      <p style={{textAlign: 'center'}}>Built with passion by Washington Kimani</p>
      <p style={{textAlign: 'center'}}>Photos are courtesy of <a href="https://unsplash.com/" style={{color: '#fff'}}>unsplash</a></p>
      <Gallery />
    </>
  )
}

export default App
