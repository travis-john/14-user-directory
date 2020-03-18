import React, { Component} from 'react';
import Container from './Container';

class Pills extends Component {
  render(){
     return(
      <Container>
        <label for='sort-pills'>Sort by:</label>
        <ul className="nav nav-pills" id='sort-pills'>
          <li className="nav-item">
            <a className="nav-link active" href="/">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="api/name">Name</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="api/phone">Phone</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="api/email">Email</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="api/dob">DOB</a>
          </li>
        </ul>
      </Container>
    );
  };
}

export default Pills;
