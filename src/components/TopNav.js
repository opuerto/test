import React, { Component } from 'react';
import { Navbar, Button, Nav, NavItem, NavDropdown, MenuItem  } from 'react-bootstrap';


class TopNav extends Component {
  state = { isOpen: false }
  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  render(){
    return(
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <img  src="/assets/Logo.svg"/>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">vörur</NavItem>
      <NavDropdown eventKey={2} title="þjonusta" id="basic-nav-dropdown" onMouseEnter = { this.handleOpen }
          onMouseLeave = { this.handleClose }
          open={ this.state.isOpen }
          >
        <MenuItem eventKey={2.1}>Skipulag</MenuItem>
        <MenuItem eventKey={2.2}>Lykilstjórnendur</MenuItem>
        <MenuItem eventKey={2.3}>skipurit</MenuItem>
        <MenuItem eventKey={2.3}>Hafa samband</MenuItem>
      </NavDropdown>
      <NavItem eventKey={3} href="#">um okkur</NavItem>

    </Nav>
  </Navbar>
    );
  }
}

export default TopNav;
