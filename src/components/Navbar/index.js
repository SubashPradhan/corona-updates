import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import '../../styles/navbar.css'


class NavBar extends Component {

  render() {
    return <div className='nav-container'>
      <Navbar expand="lg" className='navBar'>
        <Navbar.Brand className='nav-brand'>
          <Nav.Link href='/'>Corona-Updates</Nav.Link>
        </Navbar.Brand>
        <Nav.Link href="/news">News</Nav.Link>
        <Nav.Link href="/mapview">On Map</Nav.Link>
      </Navbar>
    </div >
  }
}

export default NavBar