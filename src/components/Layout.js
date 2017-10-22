import React, { Component } from 'react';
import '../App.css';
import TopNav from './TopNav';
import Banner from './Banner';
import FormComponent from './FormComponent';
import TextPresentation from './TextPresentation';
import Footer from './Footer';
import { Grid, Col,PageHeader,Row  } from 'react-bootstrap';

class Layout extends Component {
  render(){
    return(
        <div>
          <TopNav />
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <Banner />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h1 className="FormHeader-Md">Hafa Samband</h1>
              </Col>

            </Row>
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <FormComponent/>
              </Col>
              <Col xs={6} md={6}>
                <TextPresentation/>
              </Col>
            </Row>

          </Grid>
            <Footer />
        </div>

    );
  }
}

export default Layout;
