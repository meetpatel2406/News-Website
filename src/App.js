import React, { useState } from 'react'
import Navbar from './Navbar'
import Newstop from './Newstop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=>{

  const api_key="4b34e762f3bd4460bd9645b691e2a260"  
  const [progress,setProgress]=useState(0)
  return (
    <div>
      <Router>
      <LoadingBar height={3} color='red' progress={progress}/>
      <Navbar/>
      
      <Routes>
        <Route exact  path='/' element={<Newstop key="general" setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"general"}/>}/>
        <Route exact  path='business/' element={<Newstop key="business"  setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"business"}/>}/>
        <Route exact  path='entertainment/' element={<Newstop key="entertainment"  setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"entertainment"}/>}/>
        <Route exact  path='general/' element={<Newstop key="general"  setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"general"}/>}/>
        <Route exact  path='health/' element={<Newstop key="health"  setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"health"}/>}/>
        <Route exact  path='science/' element={<Newstop key="science"  setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"science"}/>}/>
        <Route exact  path='sports/' element={<Newstop key="sports"  setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"sports"}/>}/>
        <Route exact  path='technology/' element={<Newstop key="technology"  setProgress={setProgress} API_KEY={api_key} pageSize={9} country={"in"} category={"technology"}/>}/>
      </Routes>
      </Router>
      </div>
  )
}

export default App;