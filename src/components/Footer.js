import React, { Component } from 'react';
import { Grid, Col,PageHeader,Row, Nav, NavItem   } from 'react-bootstrap';

class Footer extends Component {
  render(){
    return(
      <div className="footer-background">
        <Grid>
          <Row className="show-grid ">
            <Col xs={12} md={6} id="footer-logo">
              <img src="/assets/Logo-big.svg" />
            </Col>
            <div id="footer-menus">
              <Col xs={4} md={2}>
                <Nav  stacked activeKey={null} className="footerNav" >
                  <NavItem eventKey={1} href="/home">Paper</NavItem>
                  <NavItem eventKey={2} title="Item">Pencil</NavItem>
                  <NavItem eventKey={3} >Book</NavItem>
                </Nav>
              </Col>
              <Col xs={4} md={2}>
                <Nav stacked activeKey={null} className="footerNav">
                  <NavItem eventKey={1} href="/home">News</NavItem>
                  <NavItem eventKey={2} title="Item">Making</NavItem>
                  <NavItem eventKey={3} >Sales</NavItem>
                </Nav>
              </Col>
              <Col xs={4} md={2}>
                <Nav stacked activeKey={null} className="footerNav">
                  <NavItem eventKey={1} href="/home">Videos</NavItem>
                  <NavItem eventKey={2} title="Item">Images</NavItem>
                  <NavItem eventKey={3} >Media</NavItem>
                </Nav>
              </Col>
            </div>
          </Row>
          <Row className="show-grid copyRight">
            <Col xs={12} md={12}>
                <span id="copyRightText">made by Advania</span>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
