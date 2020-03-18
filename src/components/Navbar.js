import React, { Component } from 'react';
import Container from './Container';
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-info">
        <Container>
          <a className="navbar-brand" href='/'>User Directory</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </Container>
      </nav>
    );
  }
};

export default Navbar;
