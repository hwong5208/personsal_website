import React from 'react';
import Intro from './Component/Intro'
import About from './Component/About'
import Experience from './Component/Experience'
import RightSideBar from './Component/RightSideBar'
import LeftSideBar from './Component/LeftSideBar'
import { Row, Col } from 'react-bootstrap'
const Body = () => {
    return (


        <Row className="show-grid container-fluid" >
          
            {/** ---------hidden  left side bar in xs  mode -------*/}
            <Col xsHidden={true} md={1}>
            < LeftSideBar />
            </Col>
            
            {/** ---------hidden  left side bar in xs  mode -------*/}
            <Col xs={12} md={10} className="container-fluid">
                <Row  className="show-grid container-fluid">
                    <Intro />
                </Row>

                <Row className="show-grid container-fluid">
                    <About />
                </Row>

                <Row className="show-grid container-fluid">
                    <Experience />
                </Row>

                <Row  className="show-grid container-fluid">
                    <About />
                </Row>
            </Col>

            {/** ---------hidden  right side bar in xs  mode -------*/}
            <Col xsHidden={true} md={1}>
            < RightSideBar />
            </Col>
         
            {/** ---------hidden  reft side bar in xs  mode -------*/}

        </Row>

    );
}

export default Body;