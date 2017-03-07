import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import {List} from './List'
import {Form} from './Form'
import {Link} from 'react-router-dom'

const data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/'
  },
  {
    title: 'Redux',
    url: 'https://github.io/reactjs/redux'
  }
]

class News extends Component {

  constructor() {
    super()
    this.state = {
      data,
      keyword: ''
    }
  }

  searchTitle (event) {
    this.setState({
      keyword: event.target.value
    })
    // fetch(`http://hn.algolia.com/api/v1/search?query=${event.target.value}`)
    // .then(res => res.json())
    // .then(data => this.setState ({data: data.hits}))
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
        <Form searchTitle={this.searchTitle.bind(this)} keyword={this.state.keyword}/>
        <List data={this.state.data.filter(results=> (results.title === null ? '' : results.title).match(new RegExp(this.state.keyword,'i')))}/>
      </div>
    );
  }
}

export default News;
