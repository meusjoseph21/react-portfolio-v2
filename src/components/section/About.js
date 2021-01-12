import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import FlippingCard from "react-ui-cards";
import { Carousel, Container, Row, Col } from "react-bootstrap";
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
            <Col>
            <Carousel prevLabel={null} nextLabel={null}>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Pandemic}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="caption">
              <h3>Pandemic Tracker</h3>
              <p>Pandemic Tracker is a MERN stack application that allows users to view live Coronavirus numbers and news by country and state.</p>


              </div>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Meal}
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className="caption">
              <h3>Meal Matcher</h3>
              <p>Don't know what to eat today but have an ingredient you want to use? Meal Matcher allows users to find recipes based off the ingredients they have available.</p>
              </div>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Hotel}
              alt="Third slide"
            />
            <Carousel.Caption>
            <div className="caption">
              <h3>Hotel Motel</h3>
              <p>Hotel Motel is a reservation system designed for boutique hotels that want to streamline their reservation intake and output.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Snake}
              alt="Third slide"
            />
            <Carousel.Caption>
            <div className="caption">
              <h3>Snake</h3>
              <p>Bored at work or in class? Snake is the classic distraction game designed as part of a project to create a classic arcade game website.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Budget}
              alt="Third slide"
            />
            <Carousel.Caption>
            <div className="caption">
              <h3>Budget Tracker</h3>
              <p>Traveling on a budget? Budget Tracker allows world travellers to keep track of their tight budgets, the beauty of it all? It can be used with or without internet.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="height-carousel"
              src={Burger}
              alt="Third slide"
            />
            <Carousel.Caption>
            <div className="caption">
              <h3>Eat-Da-Burger</h3>
              <p>Eat-Da-Burger was designed using handlebars and was made as part of an exercise with Denver University.</p>
              </div>
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
