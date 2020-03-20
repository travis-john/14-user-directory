import React from 'react';
import Container from './Container';

const Pills = (props) => {
     return(
      <Container>
        <label for='sort-pills'>Sort by:</label>
        <ul className="nav nav-pills mb-3" id='sort-pills'>
          <li className="nav-item">
            <a className="nav-link active" onClick={props.function}>All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={props.function}>Name</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={props.function}>Email</a>
          </li>
        </ul>
      </Container>
    );
}

export default Pills;
