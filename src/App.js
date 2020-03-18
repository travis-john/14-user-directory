import React, { Component } from 'react';
import API from './utils/API';
import Navbar from './components/Navbar';
import Pills from './components/Pills';
import Container from './components/Container';
import CardDeck from './components/CardDeck';
import Card from './components/Card';

class App extends Component {

  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    API.randomuser()
      .then(res => this.setState({ result: res}))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <>
      <Navbar />
      <Pills />
      <Container>
      <CardDeck>
      {this.state.result.map((res, index) => (
            <Card
              key={index}
              name={res.name}
              company={res.company.name}
              email={res.email}
              city = {res.address.city}
              phone={res.phone}
            />
          ))}
      </CardDeck>
      </Container>
      </>
    );
  }
};

export default App;
