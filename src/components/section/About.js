import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import FlippingCard from "react-ui-cards";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import Burger from "./images/burger.jpg"
import Pandemic from "./images/pandemic.jpg"
import Budget from "./images/budget.jpg"
import Hotel from "./images/hotel.jpg"
import Meal from "./images/meal.jpg"
import Snake from "./images/snake.jpg"

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about-section" id="about">
        <Container>
          <Row>
            <Col xs={12} md={6}>
            <Carousel prevLabel={null} nextLabel={null}>
          <Carousel.Item interval={4000}>
          
            <img
              className="height-carousel"
              src={Pandemic}
              alt="First slide"
            />
           
            
            <Carousel.Caption>
            <div className="carousel-caption">
              <h3>Slide 1</h3>
              <p>Caption</p>
            </div>
              
              <Button variant="outline-primary" href="https://pandemic-tracking.herokuapp.com/" target="_blank">Website</Button>
              <Button variant="outline-danger" className="button-move" href="https://github.com/meusjoseph21/pandemic-tracker-sans-splash" target="_blank">Github</Button>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Meal}
              alt="Third slide"
            />
            <Carousel.Caption>
              
              <Button variant="outline-primary" href="https://jessicaano92.github.io/meal_matcher_javascript_ajax/" target="_blank">Website</Button>
              <Button variant="outline-danger" className="button-move" href="https://github.com/jessicaano92/meal_matcher_javascript_ajax" target="_blank">Github</Button>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Hotel}
              alt="Third slide"
            />
            <Carousel.Caption>
            
              <Button variant="outline-primary" href="https://hotelmotel.herokuapp.com/" target="_blank">Website</Button>
              <Button variant="outline-danger" className="button-move" href="https://github.com/ryanwit/hotel_motel" target="_blank">Github</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Snake}
              alt="Third slide"
            />
            <Carousel.Caption>
            
              <Button variant="outline-primary" href="https://afternoon-brook-47780.herokuapp.com/" target="_blank">Website</Button>
              <Button variant="outline-danger" className="button-move" href="https://github.com/meusjoseph21/snake-game-react" target="_blank">Github</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Budget}
              alt="Third slide"
            />
            <Carousel.Caption>
            
              <Button variant="outline-primary" href="https://evening-reef-29170.herokuapp.com/" target="_blank">Website</Button>
              <Button variant="outline-danger" className="button-move" href="https://github.com/meusjoseph21/progressiveBudget-pwa" target="_blank">Github</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Burger}
              alt="Third slide"
            />
            <Carousel.Caption>
            
              <Button variant="outline-primary" href="https://polar-shore-82853.herokuapp.com/" target="_blank">Website</Button>
              <Button variant="outline-danger" className="button-move" href="https://github.com/meusjoseph21/express-burgers-handlebars" target="_blank">Github</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


            </Col>
          </Row>


        </Container>
       
      </div>
    );
  }
}

export default About;
