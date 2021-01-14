import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import {Image, Container, Row, Col} from "react-bootstrap"
import Joey from "./images/porto.png"


class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-section" id="main">
        <Container>
          <Row>
            <Col>
            <div className="main-about">
            <ReactTypingEffect
                        text="Hello,"
                        className="h1-about"
                        typingDelay="3000ms"
                    />
                    <br></br>
                    <p className="p-about">I'm Joey Meus</p>
                    
                  
                    <Image src={Joey} rounded className="boxshadow"></Image>


                  
            </div>
            </Col>
            
          </Row>

        </Container>
        
        {/* <div className="container-fluid">
          <div className="row">
                    <div className=" main-content col-xs-12">
                    <ReactTypingEffect
                        text="Hello,"
                        className="h1-about"
                        typingDelay="3000ms"
                    />
                    <br></br>
                    <p className="p-about">I'm Joey</p>
                    
                    <Image src={Joey} rounded></Image> 

                 
                    
                   

                    </div>
            </div>
            <div className="row">
            <div className= "col-xs-12 main-secondary-content">I am a Full Stack Developer from Denver Colorado. I strive to make intuitive, mobile friendly, sleek applications.</div>


            </div>
                   
          
        </div> */}
      </div>
    );
  }
}

export default Main;
