import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';



import homedecor from '../images/logo.jpg'


export default class TopNavBar extends Component {

    render() {
        return (
        <Navbar bg="clear" expand="lg">        
          <Navbar.Brand href="/">
      <img
        alt=""
        src={homedecor}
        width="50"
        height="50"
        className="d-inline-block align-middle"
      />{' '}
      Pixie Dust
    </Navbar.Brand>   
          <Navbar.Toggle aria-controls="basic-navbar-nav" />      
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                        <NavDropdown title="Cleaning Services" id="basic-nav-dropdown">
                             <NavDropdown.Item href="/about-services/top-to-bottom-deluxe-cleaning">TOP TO BOTTOM DELUXE CLEANING</NavDropdown.Item>
                             <NavDropdown.Item href="/about-services/maintenance-cleaning">MAINTENANCE HOUSE CLEANING</NavDropdown.Item>
                             <NavDropdown.Item href="/about-services/move-in-move-out-cleaning">MOVE-IN & MOVE-OUT CLEANING</NavDropdown.Item>
                             <NavDropdown.Divider />
                             <NavDropdown.Item href="/about-services/small-projects">SMALL PROJECTS</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/contact" >Contact</Nav.Link>
                        <Nav.Link href="/faq" >FAQ</Nav.Link>
                        <Nav.Link href="/service-terms" >Service Terms</Nav.Link>
                        </Nav>


                    
                    </Navbar.Collapse>            
                    </Navbar>

            
        )
    }
}