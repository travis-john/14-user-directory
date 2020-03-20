import React, { Component } from 'react';
import Container from './Container';
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark mb-3">
        <Container>
          <a className="navbar-brand" href='/'>User Directory</a>
        </Container>
      </nav>
    );
  }
};

export default Navbar;
