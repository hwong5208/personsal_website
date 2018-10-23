import React from 'react';
import { Jumbotron, Row, Col, Grid, Table } from 'react-bootstrap'
import'../../CSS/About.css'

const About = () => {

    return (
        <Jumbotron className='backgroundColor'>
    
            <Grid>
                <h1 >About Me</h1>
                <Row className="show-grid">
                    <Col sm={6} md={9}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                       <p>Here's a few things I'm experienced with:</p>
                        <Table responsive>

                            <tbody>
                                <tr>
                                   
                                    <td>Javascript</td>
                                    <td>NodeJS</td>

                                </tr>
                                <tr>
                                    
                                    <td>Typerscript</td>
                                    <td>React</td>
                                </tr>
                                <tr>
                                    
                                    <td>Python</td>
                                    <td>JQuery</td>
                                </tr>
                        
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={6} md={3}>
                  
                         <img src="https://media.licdn.com/dms/image/C5603AQGG8k4gMaOKrA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=_oIEAM-mSPUoC9LwxCb3n8H59aUcOdbDyTHHc-pRWuM" alt="Smiley face"
                            height="200" width="200" className='portfolioPic'></img> 
                       


                    </Col>

                </Row>


            </Grid>
        </Jumbotron>
    );
}

export default About