import React, { Component } from 'react';
import { Carousel  } from 'react-bootstrap';

class Banner extends Component {
  render(){
    return(
      <Carousel indicators={false} controls={false}  >
        <Carousel.Item>
          <img  width="2000px" src="/assets/banner1.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img  width="2000px" alt="900x500" src="/assets/banner2.jpg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img width="2000px"  alt="900x500" src="/assets/banner3.jpg"/>
        </Carousel.Item>
      </Carousel>

    );
  }
}

export default Banner;
