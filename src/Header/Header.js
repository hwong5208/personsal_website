import React from 'react';
import resume from '../Asset/resume.pdf'
import logo from '../Asset/logo.png'
import { Nav, Navbar, NavItem , Button} from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar inverse collapseOnSelect className="backgroundColor" >
            <Navbar.Header>
                <Navbar.Brand>
                    {/* <a href="#brand"> Zack Wong</a> */}
                    <img src={logo} alt="Zack Wong"></img>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        About
                    </NavItem>
                    <NavItem eventKey={2} href="#Experience">
                        Experience
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Work
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                       Contact
                    </NavItem>
                    {/* <NavItem eventKey={4} href='https://drive.google.com/file/d/1Vl85JBGY9FGNJ19KklP5z-DJqNtMyVIM/view?usp=sharing' target="_blank" >
                        <Button bsStyle="primary"> Resume</Button>
                    </NavItem> */}
                    <NavItem eventKey={4} href={resume} target="_blank" >
                        <Button bsStyle="primary"> Resume</Button>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>     
    );
}

export default Header;