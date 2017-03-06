import React, { Component } from 'react';
import {PeopleList} from './PeopleList';
export class People extends Component {
  constructor(){
    super()
    this.state={
      peoples:[]
    }
  }

  componentDidMount(){

    const that = this;
    fetch(`http://swapi.co/api/people`)
    .then(response => response.json()).then(data =>
      {
        that.setState({
          peoples: data.results
        })
      }
    );
  }
  render() {
    return (
      <div>
        <PeopleList peoplez={this.state.peoples}/>
      </div>
    );
  }
}
