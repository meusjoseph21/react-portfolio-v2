import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";


class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-section" id="main">
        <div className="container-fluid">
          <div className="row">
                    <div className=" main-content col-6">
                    <ReactTypingEffect
                        text="Hello,"
                        className="h1-about"
                        typingDelay="3000ms"
                    />
                    <br></br>
                    <p className="p-about">I'm Joey</p> 
                    </div>
                    <div className= "col-6 main-secondary-content">Full Stack Developer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
