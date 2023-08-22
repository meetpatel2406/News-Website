import React from 'react'
import Navbar from './Navbar'
import Newstop from './Newstop'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Newstop pageSize={10}/>
    </div>
  )
}
