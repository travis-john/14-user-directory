import React, { Component } from 'react';
import All from './pages/All';
import Navbar from './components/Navbar';
import Container from './components/Container';

class App extends Component {


  render() {
    return (
      <>
        <Navbar />
        <Container>
          <All></All>
        </Container>
      </>
    );
  }
};

export default App;
