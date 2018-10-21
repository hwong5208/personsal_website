import React from 'react';
import { Jumbotron, Row, Col} from 'react-bootstrap'
const About = () => {
    return (
        <Jumbotron className='backgroundColor'>

            <h1 >About Me</h1>
            <section>
                <Row className="show-grid">
                    <Col xs={8} md={8}>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                
  
                </Col>
                    <Col xs={4} md={4}>
                        <img src="https://media.licdn.com/dms/image/C5603AQGG8k4gMaOKrA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=_oIEAM-mSPUoC9LwxCb3n8H59aUcOdbDyTHHc-pRWuM" alt="Smiley face"
                            height="200" width="200" className='portfolioPic'></img>
                    </Col>
                </Row>
            </section>

        </Jumbotron>
    );
}

export default About