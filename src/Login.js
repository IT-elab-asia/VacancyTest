import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Coin from './Coin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Primage from './ProfileImage.jpeg'
import Header from './Header';

export default class Login extends React.Component {
    state = {
      person: []
    }
  
    componentDidMount() {
        var request = {
            params: {
              id: [1]
            }
          }
      axios.get(`https://jsonplaceholder.typicode.com/users/`, request)
        .then(res => {
          const person = res.data;
          this.setState({ person });
        })
    }
  
    render() {

  return (
    <div className="coin-app">
        <Header />
      <div className="coin-search">
        <h1 className="coin-text"> Профиль💼</h1>
      </div>
      <div className="post">
        <Container >
        <Row>
          <Col><img src={Primage} /></Col>
          <Col><h3>Личная информация</h3>
          <p>{ this.state.person.map(person => <li>{person.name}</li>)}</p>
          <p>{ this.state.person.map(person => <li>{person.username}</li>)}</p>
          <p>{ this.state.person.map(person => <li>{person.email}</li>)}</p>
          </Col>

        </Row>
        <Row>
          <Col><h3>Адрес</h3>
          <p>{ this.state.person.map(person => <li>{person.address.street}</li>)}</p>
          <p>{ this.state.person.map(person => <li>{person.address.suite}</li>)}</p>
          <p>{ this.state.person.map(person => <li>{person.address.city}</li>)}</p>
          <p>{ this.state.person.map(person => <li>{person.address.zipcode}</li>)}</p>
        </Col>
        <Col><h3>Компания</h3>
        <p>{ this.state.person.map(person => <li>{person.company.name}</li>)}</p> 
        <p>{ this.state.person.map(person => <li>{person.company.catchPhrase}</li>)}</p>
        <p>{ this.state.person.map(person => <li>{person.company.bs}</li>)}</p>
        </Col>
        <Col><h3>Other...</h3>
        <p>{ this.state.person.map(person => <li>{person.phone}</li>)}</p>
        <p>{ this.state.person.map(person => <li>{person.website}</li>)}</p>
        </Col>

        </Row>
        </Container>

      </div>
    </div>
  );
}
}
