import React, { Component } from 'react';
import API from './utils/API';
import Navbar from './components/Navbar';
import Pills from './components/Pills';
import Container from './components/Container';
import CardDeck from './components/CardDeck';
import Card from './components/Card';

class App extends Component {

  state = {
    sortBy: "",
    results: [],
    search: "",
    filteredResults: []
  }

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ results: res.data, filteredResults: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <>
      <Navbar />
      <Pills />
      <Container>
      <CardDeck>
      {this.state.results.map((user, index) => (
        <Card
        key={index}
        name={user.name}
        company={user.company.name}
        email={user.email}
        city={user.address.city}
        phone={user.phone}
        />
      ))}
      </CardDeck>
      </Container>
      </>
    );
  }
};

export default App;
