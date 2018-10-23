import React from 'react';
import { Tab, Tabs, Jumbotron } from 'react-bootstrap'


const Experience = () => {
    return (
 
        <Jumbotron className='backgroundColor'>
            <h1 id="Experience" > My past</h1>
            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                <Tab eventKey={1} title="Tab 1">
                    <h3>Tab 1 content </h3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Tab>
                <Tab eventKey={2} title="Tab 2">
                    Tab 2 content
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Tab>
                <Tab eventKey={3} title="Tab 3" >
                    Tab 3 content
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             </Tab>
            </Tabs>

        </Jumbotron>
      
    );

}

export default Experience; 