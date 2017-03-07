import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import {Link} from 'react-router-dom'

class People extends Component {

  constructor() {
    super()
    this.state = {
      peopleList: []
    }
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/people`)
    .then(res => res.json())
    .then(data => this.setState ({peopleList: data.results}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div><br/>
        <ul>
          <li><Link to="/">News</Link></li>
          <li><Link to="/people">People</Link></li>
        </ul>
        <ul>
          {this.state.peopleList.map((results,index)=>
          <li key={index}>{results.name}</li>)}
        </ul>

      </div>
    );
  }
}

export default People;
