import React, { Component } from 'react';
import Header from './Header'
import Body from './Body'
import { StickyContainer } from 'react-sticky';
import Footer from './Footer'
import logo from './logo.svg'



import './App.css';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000); // simulates an async action, and hides the spinner
  }


  render() {

    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    return <img src={logo} className="App-logo" alt="logo" />; // render null when app is not ready
  }
    return (
    
      <StickyContainer className="container-fluid" >
 
       <Header/>

       <Body />
       <Footer/>
    
      </StickyContainer>

    );
  }
}

export default App;

