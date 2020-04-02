import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../../styles/navbar.css'

class NavBar extends Component {
  render() {
    return <div className='nav-container'>
      <Navbar expand="lg" className='navBar'>
        <Navbar.Brand className='nav-brand'>
          <Nav.Link href='/'>Corona-Updates</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='link-collapse' href="/news">News</Nav.Link>
            <Nav.Link className='link-collapse' href="/mapview">On Map</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  }
}

export default NavBar