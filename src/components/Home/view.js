import React from 'react'
import '../../styles/home.css'
import NavBar from '../Navbar'
import Selector from '../Selector'
import '../../styles/countryData.css'

export default function view() {
  return <div>
    <NavBar/> 
    <h1 className='heading container'>COVID- 19 (CORONA) UPDATES</h1>
    <Selector />
  </div>

}