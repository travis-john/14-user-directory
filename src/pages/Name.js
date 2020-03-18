import React, {Component} from 'react';
import axios from 'axios';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';

class Name extends Component {

  state = {
    results: [],
  }

  async componentDidMount() {
     axios.get('https://randomuser.me/api/?results=200&nat=us')
       .then(res => {
         this.setState({ results: res.data})
       })
   }

  render() {
    return (
      <Row>
      {this.state.results && this.state.results.map(result => (
        <Col size='md-4'>
          <Card
            key={result.id}
            image = {result.picture}
            name={result.name}
            company={result.company.name}
            email={result.email}
            city={result.address.city}
            phone={result.phone}
            />
        </Col>
      ))}
      </ Row>
    );
  }
}

export default Name;
