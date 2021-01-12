import React, { Component } from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiMaterializecss } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import Pdf from "./pdf/joeyresume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className="port-section" id="port">
        <Container>
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={6}>
              
              <div className="secondary-main">
              <>
                <Accordion>
                  <Accordion.Toggle
                    as={Button}
                    variant="outline-dark"
                    className="resumeBtn"
                
                    eventKey="0"
                  >
                    View Resume
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div className="resume">
                      <Document file={Pdf}>
                        <Page pageNumber={1} />
                      </Document>
                    </div>
                  </Accordion.Collapse>
                </Accordion>
              </>
              <div className="hider">
              <p>
                  I am a Full Stack Developer from Denver Colorado. I strive to
                  make intuitive, mobile friendly, sleek applications. After
                  graduating from The University Of Denver with a Bootcamp
                  certificate in Development I have been looking to expand my
                  knowledge in a new professional position.
                </p>
                <br></br>
                <p>
                  In my free time I like to hike, bike, climb and ski. I have
                  always been inspired by nature and incorporated that into my
                  website.
                </p>
                <br></br>
                <p className="colorChange">
                  Please reach out with questions, concerns, or a funny joke!
                </p>
              </div>
              <div className="icons">
              <FaReact color="#d0c8c7" size="60" />
              <DiMysql color="#d0c8c7" size="60" />
              <SiJavascript color="#d0c8c7" size="60" />
              <DiCss3 color="#d0c8c7" size="60" />
              <IoLogoHtml5 color="#d0c8c7" size="60" />
              <IoLogoNodejs color="#d0c8c7" size="60" />
              <SiPostman color="#d0c8c7" size="60" />
              <BsBootstrap color="#d0c8c7" size="60" />
              <DiMaterializecss color="#d0c8c7" size="60" />
              <DiNpm color="#d0c8c7" size="60" />

              </div>

                  
              </div>
              
            
            </Col>
            <Col xs={12} md={3}></Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
