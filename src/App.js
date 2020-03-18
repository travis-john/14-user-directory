import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import All from './pages/All';
import DOB from './pages/DOB';
import Email from './pages/Email';
import Name from './pages/Name';
import Navbar from './components/Navbar';
import Pills from './components/Pills';
import Container from './components/Container';

class App extends Component {


  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Pills />
          <Container>
            <Route exact path="/" component={All} />
            <Route exact path="/all" component={All} />
            <Route exact path="/name" component={Name} />
            <Route exact path="/email" component={Email} />
            <Route exact path="/dob" component={DOB} />
          </Container>
        </>
      </Router>
    );
  }
};

export default App;
