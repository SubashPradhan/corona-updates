import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import MapView from './components/MapView/view'

class App extends Component{
  render(){
    return <div>
      <Route path='/' exact component={Home} />
      <Route path='/news' component={News} />
      <Route path='/mapview' component={MapView} />
    </div>
  }
}

export default App
