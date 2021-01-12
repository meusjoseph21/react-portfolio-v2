import React, {Component} from "react"
import {Link} from "react-scroll"


class NavBar extends Component {
    state = {}
    render(){
        return (
            <div className="navbar">
             
                    <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}><div className="main-button">Main</div>
                    </Link>
                    <Link
                    activeClass="active"
                    to="port"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}><div className="port-button">About</div>
                    </Link>
                    <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}><div className="about-button">Portfolio</div>
                    </Link>
                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}><div className="contact-button">Contact</div>
                    </Link>
                    
                    
             
            </div>
        )
    }
}

export default NavBar