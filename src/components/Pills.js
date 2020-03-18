import React, { Component} from 'react';
import Container from './Container';

class Pills extends Component {
  render(){
     return(
      <Container>
        <label for='sort-pills'>Sort by:</label>
        <ul className="nav nav-pills mb-3" id='sort-pills'>
          <li className="nav-item">
            <a className="nav-link active" href="/all">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/name">Name</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/email">Email</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dob">DOB</a>
          </li>
        </ul>
      </Container>
    );
  };
}

export default Pills;
