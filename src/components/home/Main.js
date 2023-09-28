import React from 'react'
import Hero from './hero/hero';
import { Home } from './mainContent/homes/Home';

function Main() {
    console.log("success")
  return (
    <div className='container' style={{marginTop:'80px'}}>
        <Hero/>
        <Home/>
    </div>
  )
}

export default Main;