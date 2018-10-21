import React from 'react';
import { Tab, NavItem, Nav, Row, Col } from 'react-bootstrap'

const Experience = () => {
    return (
        <section >
            <h1 id="Experience" > My past</h1>
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                    <Row className="clearfix">
                        <Col sm={2}>
                            <Nav bsStyle="pills" className="exp" stacked>
                                <NavItem eventKey="first">Tab 1</NavItem>
                                <NavItem eventKey="second">Tab 2</NavItem>
                                <NavItem eventKey="three">Tab 3</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">Tab 1
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Tab 2 content
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="three">Tab 3 content
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </Tab.Pane>
                            </Tab.Content>
                            <p />
                            <p />
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>
    );

}

export default Experience; 