import React, { Component } from "react";

import "animate.css/animate.min.css";

import { Carousel, Accordion, Card,Container, Row, Col, Button } from "react-bootstrap";
import Burger from "./images/burger.jpg";
import Pandemic from "./images/pandemic.jpg";
import Budget from "./images/budget.jpg";
import Hotel from "./images/hotel.jpg";
import Meal from "./images/meal.jpg";
import Snake from "./images/snake.jpg";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="about-section" id="about">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Carousel prevLabel={null} nextLabel={null}>
                <Carousel.Item interval={4000}>
                  <img
                    className="height-carousel"
                    src={Pandemic}
                    alt="First slide"
                  />

                  <Carousel.Caption>
                    <Button
                      variant="primary"
                      href="https://pandemic-tracking.herokuapp.com/"
                      target="_blank"
                    >
                      Website
                    </Button>
                    <Button
                      variant="danger"
                      className="button-move"
                      href="https://github.com/meusjoseph21/pandemic-tracker-sans-splash"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className="height-carousel"
                    src={Meal}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <Button
                      variant="primary"
                      href="https://jessicaano92.github.io/meal_matcher_javascript_ajax/"
                      target="_blank"
                    >
                      Website
                    </Button>
                    <Button
                      variant="danger"
                      className="button-move"
                      href="https://github.com/jessicaano92/meal_matcher_javascript_ajax"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className="height-carousel"
                    src={Hotel}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <Button
                      variant="primary"
                      href="https://hotelmotel.herokuapp.com/"
                      target="_blank"
                    >
                      Website
                    </Button>
                    <Button
                      variant="danger"
                      className="button-move"
                      href="https://github.com/ryanwit/hotel_motel"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className="height-carousel"
                    src={Snake}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <Button
                      variant="primary"
                      href="https://afternoon-brook-47780.herokuapp.com/"
                      target="_blank"
                    >
                      Website
                    </Button>
                    <Button
                      variant="danger"
                      className="button-move"
                      href="https://github.com/meusjoseph21/snake-game-react"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className="height-carousel"
                    src={Budget}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <Button
                      variant="primary"
                      href="https://evening-reef-29170.herokuapp.com/"
                      target="_blank"
                    >
                      Website
                    </Button>
                    <Button
                      variant="danger"
                      className="button-move"
                      href="https://github.com/meusjoseph21/progressiveBudget-pwa"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    className="height-carousel"
                    src={Burger}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <Button
                      variant="primary"
                      href="https://polar-shore-82853.herokuapp.com/"
                      target="_blank"
                    >
                      Website
                    </Button>
                    <Button
                      variant="danger"
                      className="button-move"
                      href="https://github.com/meusjoseph21/express-burgers-handlebars"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
           
            <Col xs={12} md={4}>
              <div className="descriptions">

              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <span className="cardname">Pandemic Tracker</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Pandemic Tracker allows users to observe real time global data of the COVID-19 virus. With Pandemic Tracker users can keep up with news and explore global coronavirus numbers all on an interactive UI. Using React Globe, MERN, Bootstrap, React Particles, and Axios.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                  <span className="cardname">Meal Matcher</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Meal Matcher is a recipe book that searches for recipes from the MealDB recipe API based on the ingredients a user searches. Users can then save and remove recipes from their recipe book. Using Javascript(ES6), Materialize, Bootstrap, HTML, CSS.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                  <span className="cardname">Hotel Motels</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Hotel Motel is a property management application designed specifically for smaller boutique style hotels. This application allows hotel employees to create reservations easily all with a couple clicks. Javascript(ES6), Materialize, HTML, Sequelize, Express-handlebars, Vanta.js, Express.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                  <span className="cardname">Snake</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>Snake is a classic computer game made as part of a bigger "arcade game" project. Using react, react hooks, and CSS.</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                  <span className="cardname">Budget Tracker</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>The Travel Budget Tracker allows users to track their spending and earnings while traveling. The budget tracker is specific to travelling because it can be used on and offline and user entries will save regardless. Using indexedDB, cache API, and service workers </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                  <span className="cardname">Eat-Da-Burger</span>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>the Eat-Da-Burger application is an application that is meant to simulate deciding to DEVOUR a burger and enter new burgers into the mix. Using mysql, express, and express-handlebars.</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>


              </div>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
