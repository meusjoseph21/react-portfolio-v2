import React, { Component } from "react";
import { Accordion, Container, Row, Col, Button } from "react-bootstrap";
import {AiFillLinkedin} from "react-icons/ai"
import {FaGithub} from "react-icons/fa"
import {FaSpotify} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import Pdf from "./pdf/joeyresume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-section" id="contact">
        <Container>
          <Row>
            <Col>
              <div className="contact-sheet">
              <p><span className="email">Email Me: </span> meusjoseph21@gmail.com</p>
              <p className="or">Or</p>
              <p>Get In Touch On My Other Socials:</p>
              <a href="https://www.linkedin.com/in/joseph-meus-4b8b071b4/" target="_blank">
              <AiFillLinkedin size="60" color="#242222"/>
              </a>
              <a href="https://github.com/meusjoseph21" target="_blank">
              <FaGithub size="60" color="#242222"/>
              </a>
            
             <a href="https://open.spotify.com/user/j.meus?si=Yj9omGdrQL-CYy2OpD-FfA" target="_blank">
             <FaSpotify size="60" color="#242222"/>
             </a>
             <a href="https://www.facebook.com/jmeus1/" target="_blank">
             <AiFillFacebook size="60" color="#242222"/>
             </a>
              


              </div>
             
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={6}>
            <div className="resume-contact">
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
              </div>
            </Col>
            <Col xs={12} md={3}></Col>
          </Row>
        </Container>
        <footer className="copyright">Joseph Meus 2021 <span>&#169;</span></footer>
      </div>
    );
  }
}

export default Contact;
