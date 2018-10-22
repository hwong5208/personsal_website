import React from 'react';
import {Jumbotron,Button, Grid,Row}  from 'react-bootstrap'

const Intro = () => {

  
    return (
        //<Jumbotron style={background} >
        <Jumbotron className="backgroundColor">
            <Grid>
                <Row>
            <p className='jdAIsu'>Hi, my name is </p>
            <h1> <span className='enxLer'>Zack Wong.</span></h1>
            <h3 className='kTStvU'>I build things for the web.</h3>
         
            <p >I’m a newbie Web developer in Vancouver, BC. I am just graduated from <a href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC</a> and major in Computer Science.</p>
             <p>I am opening for any opportunity no matter front-end, backend or UI/UX design. Please feel to contact me!  =) </p>
       
            
            <div className='introDiv'>
            <Button  bsStyle="primary" >Get In Touch</Button>              
            </div>
            </Row>
            </Grid>
        </Jumbotron>
    );

}



export default Intro;