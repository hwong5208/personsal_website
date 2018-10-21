import React from 'react';
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'
import { Row, Col } from 'react-bootstrap'
const Body = () => {
    return (
       
        <Row className="show-grid">
            <Col xs={1} md={1}>
      
            <LeftSideBar/>
           
            </Col>
            <Col xs={10} md={10}>
                <Row className="show-grid">
                    <Intro />
                </Row>

                <Row className="show-grid">
                    <About />
                </Row>

                <Row className="show-grid">
                    <Experience />
                </Row>
                
                <Row className="show-grid">
                    <About />
                </Row>
            </Col>
          
            <Col xs={1} md={1}> 
                    <RightSideBar/>
                    
                           
            </Col>
         
        </Row>
        
    );
}

export default Body;