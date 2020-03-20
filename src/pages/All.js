import React, {Component} from 'react';
import axios from 'axios';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';

class All extends Component {

  constructor (props){
    super(props);
    this.state = {
      results:[],
      allResults:[]
    };
    this.all = this.all.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByEmail = this.sortByEmail.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('https://randomuser.me/api/?results=60&nat=us');
    this.setState({ results: res.data.results });
    this.setState({allResults: res.data.results});
  }

  all() {
    const allResponse = this.state.allResults;
    console.log(allResponse);
    this.setState({state: allResponse});
  }

  sortByName() {
    const sortedNameResponse = this.state.results.sort(function(a, b) {
        return (a.name.last.toUpperCase() < b.name.last.toUpperCase()) ? -1 : (a.name.last.toUpperCase() > b.name.last.toUpperCase()) ? 1 : 0;
      });
      this.setState({state: sortedNameResponse })

  }

  sortByEmail() {
    const sortedEmailResponse = this.state.results.sort(function(a, b) {
      return (a.email.toUpperCase() < b.email.toUpperCase()) ? -1 : (a.email.toUpperCase() > b.email.toUpperCase()) ? 1 : 0;
    });
    this.setState({ state: sortedEmailResponse });
  }

  render() {
    return (
      <>
        <label htmlFor='sort-pills'>Sort by:</label>
        <ul className="nav nav-pills mb-3" id='sort-pills'>
          <li className="nav-item mr-2">
            <button className="nav-link active" onClick={this.all} >All</button>
          </li>
          <li className="nav-item mr-2">
            <button className="nav-link" onClick={this.sortByName}>Name</button>
          </li>
          <li className="nav-item mr-2">
            <button className="nav-link"  onClick={this.sortByEmail}>Email</button>
          </li>
        </ul>
      <Row>
      {this.state.results.map((user, index) => (
        <Col size='md-4' key={index}>
          <Card
            image={user.picture.large}
            name={user.name.first + " " + user.name.last}
            location={user.location.city + ", " + user.location.state}
            email={user.email}
            phone={user.phone}
            />
        </Col>
      ))}
      </ Row>
      </>
    );
  }
}

export default All;
