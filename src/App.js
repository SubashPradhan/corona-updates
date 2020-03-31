import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import CountryData from './components/CountryData'

class App extends Component{
  render(){
    return <div>
      <Route path='/' exact component={Home} />
      <Route path='/country' exact component={CountryData} />
    </div>
  }
}

export default App
