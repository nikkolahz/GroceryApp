import React from 'react'
import {Button, Navbar, Nav} from 'react-bootstrap'
function TopNavbar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='/home'>Grocery App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link href='/receipts'>Receipts</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
      </Navbar>
  )
}

export default TopNavbar
