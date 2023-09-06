import React,{Component } from 'react'
import Navbar from './Navbar'
import Newstop from './Newstop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component{

  api_key="4b34e762f3bd4460bd9645b691e2a260" 

  render(){  
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact  path='/' element={<Newstop key="general" API_KEY={this.api_key} pageSize={9} country={"in"} category={"general"}/>}/>
        <Route exact  path='business/' element={<Newstop key="business" API_KEY={this.api_key} pageSize={9} country={"in"} category={"business"}/>}/>
        <Route exact  path='entertainment/' element={<Newstop key="entertainment" API_KEY={this.api_key} pageSize={9} country={"in"} category={"entertainment"}/>}/>
        <Route exact  path='general/' element={<Newstop key="general" API_KEY={this.api_key} pageSize={9} country={"in"} category={"general"}/>}/>
        <Route exact  path='health/' element={<Newstop key="health" API_KEY={this.api_key} pageSize={9} country={"in"} category={"health"}/>}/>
        <Route exact  path='science/' element={<Newstop key="science" API_KEY={this.api_key} pageSize={9} country={"in"} category={"science"}/>}/>
        <Route exact  path='sports/' element={<Newstop key="sports" API_KEY={this.api_key} pageSize={9} country={"in"} category={"sports"}/>}/>
        <Route exact  path='technology/' element={<Newstop key="technology" API_KEY={this.api_key} pageSize={9} country={"in"} category={"technology"}/>}/>
      </Routes>
      </Router>
      </div>
  )
}
}
