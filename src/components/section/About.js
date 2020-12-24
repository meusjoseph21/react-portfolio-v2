import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        
        <ScrollAnimation animateIn="flipInY">
            <h1>gi</h1>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
