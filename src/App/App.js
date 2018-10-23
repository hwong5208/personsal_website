import React, { Component } from 'react';
import Header from '../Header/Header'
import Body from '../Body/Body'
import { StickyContainer } from 'react-sticky';
import Footer from '../Footer/Footer'
// import logo from '../Asset/logo.svg'
import logo from '../Asset/logo.png'
import '../CSS/App.css';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }),1000); // simulates an async action, and hides the spinner
  }


  render() {

    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    // return <img src={logo} className="App-logo" alt="logo" />; // render null when app is not ready
    return <img src={logo} className="App-logo" alt="logo" />
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

