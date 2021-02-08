import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export const Navbarr = () => {
  return (
    <>
      <Navbar variant="dark" bg="primary-codev " expand="md">
        <Navbar.Brand href="#home">Codev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Enlace</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl style={{ borderRadius: '1.5rem', borderColor: '#00C58E' }} type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button style={{ borderRadius: '1.5rem', borderColor: '#00C58E' }} variant="dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}
