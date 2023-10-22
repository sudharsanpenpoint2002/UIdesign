import React from 'react'
import {Carousel, Container} from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';

const Slider = () => {
  return (
    <div>
        <Container>
        <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Hi!  How are you?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Yeah I am fine. What are you doing?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
           Talking to youuu...?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  )
}

export default Slider