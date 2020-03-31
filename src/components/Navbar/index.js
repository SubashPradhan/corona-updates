import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import '../../styles/navbar.css'


class NavBar extends Component {

  render() {
    return <div className='nav-container'>
      <Navbar expand="lg" className='navBar'>
        <Navbar.Brand class='nav-brand'>
          <Nav.Link class='nav-container' href='/'>Corona-Updates</Nav.Link>
        </Navbar.Brand>
        <Nav.Link href="/news">News</Nav.Link>
      </Navbar>
    </div >
  }
}

export default NavBar