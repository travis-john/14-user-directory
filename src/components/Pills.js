import React, { Component} from 'react';
import Container from './Container';

class Pills extends Component {
  render(){
     return(
      <Container>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="/">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="api/name">Name</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="api/phone">Phone</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="api/email">Email</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="api/dob">DOB</a>
          </li>
        </ul>
      </Container>
    );
  };
}

export default Pills;
