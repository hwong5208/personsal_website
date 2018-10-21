import React, { Component } from 'react';
import Header from './Header'
import Body from './Body'
import { StickyContainer } from 'react-sticky';
import Footer from './Footer'


import './App.css';

class App extends Component {
  render() {
    return (
      <StickyContainer>
      <div >
       <Header/>

       <Body/>
       <Footer/>
      </div>
      </StickyContainer>
    );
  }
}

export default App;
