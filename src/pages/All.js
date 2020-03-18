import React, {Component} from 'react';
import axios from 'axios'
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';

class All extends Component {

  state = {
    results: []
  }

  async componentDidMount() {
    const res = await axios.get('https://randomuser.me/api/?results=200&nat=us')
    this.setState({ results: res.data.results })
  }

  render() {
    return (
      <Row>
      {this.state.results.map((user, index) => (
        <Col size='md-4'>
          <Card
            key={index}
            image={user.picture.large}
            name={user.name.first + " " + user.name.last}
            location={user.location.city + ", " + user.location.state}
            email={user.email}
            phone={user.phone}
            />
        </Col>
      ))}
      </ Row>
    );
  }
}

export default All;
