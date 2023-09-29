import React from 'react'
import Hero from './hero/hero';
import { Home } from './mainContent/homes/Home';
import Footer from '../common/footer/Footer';

function Main() {
    console.log("success")
  return (
    <div className='container' style={{marginTop:'100px'}}>
        <Hero/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default Main;