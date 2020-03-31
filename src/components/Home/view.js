import React from 'react'
import '../../styles/home.css'
import NavBar from '../Navbar'
import GlobeData from '../GlobeData'
import CountryData from '../CountryData'
import '../../styles/countryData.css'

export default function view(props) {
  // const {select} = props
  return <div>
    <NavBar/> 
    <h1 className='heading container'>COVID- 19 (CORONA) UPDATES</h1>
    <CountryData />
    <GlobeData />
  </div>

}