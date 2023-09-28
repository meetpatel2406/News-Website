import React from 'react'
import "./.\\style.css"
import Popular from '../popular/Popular'
import Ppost from '../Ppost/Ppost'
import Life from '../business/Business'
import Sports from '../sports/Sports'
import Side from '../../sideContent/side/side'

export const Home = () => {
  return (
    <div>
        <main>
            <div className="container">
                <section className='mainContent'>
                  <Popular/>
                  <Ppost/>
                  <Life/>
                  <Sports/>
                </section>
                <section className='sideContent'>
                  <Side/>
                </section>
            </div>
        </main>
    </div>
  )
}