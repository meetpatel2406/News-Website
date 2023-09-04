import React from 'react'
import Navbar from './Navbar'
import Newstop from './Newstop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact  path='/' element={<Newstop key="general" pageSize={9} country={"in"} category={"general"}/>}/>
        <Route exact  path='business/' element={<Newstop key="business" pageSize={9} country={"in"} category={"business"}/>}/>
        <Route exact  path='entertainment/' element={<Newstop key="entertainment" pageSize={9} country={"in"} category={"entertainment"}/>}/>
        <Route exact  path='general/' element={<Newstop key="general" pageSize={9} country={"in"} category={"general"}/>}/>
        <Route exact  path='health/' element={<Newstop key="health" pageSize={9} country={"in"} category={"health"}/>}/>
        <Route exact  path='science/' element={<Newstop key="science" pageSize={9} country={"in"} category={"science"}/>}/>
        <Route exact  path='sports/' element={<Newstop key="sports" pageSize={9} country={"in"} category={"sports"}/>}/>
        <Route exact  path='technology/' element={<Newstop key="technology" pageSize={9} country={"in"} category={"technology"}/>}/>
      </Routes>
      </Router>
      </div>
  )
}