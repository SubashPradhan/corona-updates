import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import MapView from './components/MapView/view'

class App extends Component{
  render(){
    return <div>
      <Route path='/' exact component={Home} />
      <Route path='/news' exact component={News} />
      <Route path='/mapview' exact component={MapView} />
    </div>
  }
}

export default App
