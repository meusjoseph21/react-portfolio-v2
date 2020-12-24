import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import ReactRoundedImage from "react-rounded-image";
import photo from "./images/porto.png"


class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-section" id="main">
        <div className="container-fluid">
          <div className="row">
                    <div className=" main-content col-xs-12">
                    <ReactTypingEffect
                        text="Hello,"
                        className="h1-about"
                        typingDelay="3000ms"
                    />
                    <br></br>
                    <p className="p-about">I'm Joey</p> 
                   

                    </div>
            </div>
            <div className="row">
            <div className= "col-xs-12 main-secondary-content">I am a Full Stack Developer from Denver Colorado. I strive to make intuitive, mobile friendly, sleek applications.</div>


            </div>
                   
          
        </div>
      </div>
    );
  }
}

export default Main;
