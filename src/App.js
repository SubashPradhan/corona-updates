import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
// import CountryData from './components/CountryData' 

class App extends Component{
  render(){
    return <div>
      <Route path='/' component={Home} />
    </div>
  }
}

export default App
