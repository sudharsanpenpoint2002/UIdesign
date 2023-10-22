import React from 'react'
import {Container, Nav, Navbar, NavDropdown, Form, Row, Col, Button} from 'react-bootstrap';
import logo from '../logo.svg'
import profile from '../assets/profile.png'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> NovelRead
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
          <Row className="p-0">
          <Col xs="auto" className="p-1">
          <Form.Control
              type="text"
              placeholder="Search"
              className="mr-0 mr-sm-2"
              style={{ width: "300px" }}
            />
            </Col>
            <Col xs="auto" className="p-1">
            <Button type="submit" variant="warning" style={{ color: "white" }}>
              Search
            </Button>
            </Col>
            <Col xs="auto" > {/* Add p-0 class to the Col */}
            <img src={profile} alt='' width='40' height='40' className="ml-2" /> {/* Add margin to the profile image */}
          </Col>
            </Row>
          </Form>
          {/* <img src={profile} alt='' width='40' height='40' className="ml-3" /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header