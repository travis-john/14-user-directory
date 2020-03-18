import React, { Component } from 'react';
import axios from 'axios'
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

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res);
    this.setState({ results: res.data })
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
