import React from 'react'
import '../../styles/home.css'
import NavBar from '../Navbar'
import Selector from '../Selector'
import '../../styles/countryData.css'

export default function view() {
  return <div>
    <NavBar />
    <h1 className='heading data-container'>
      COVID-19 (Corona) Updates.
    </h1>
    <Selector />
  </div>

}