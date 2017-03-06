import React, { Component } from 'react'

export class About extends Component {
  constructor () {
    super()
    this.state = {
      peoples: []
    }
  }

  componentDidMount () {
    this.fetchPeoples()
  }

  fetchPeoples () {
    fetch('https://swapi.co/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        this.setState({
          peoples: resp.results
        })
      })
  }

  render () {
    return (
      <div>
        <h5>Peoples</h5>
        <ul>
          {this.state.peoples.map((people, index) => {
             return (
               <li key={index}>
                 {people.name}
               </li>
             )
           })}
        </ul>
      </div>
    )
  }
}
