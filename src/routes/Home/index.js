import React, { Component } from 'react'

import { DataList } from './DataList.jsx'
import { DataSearch } from './DataSearch.jsx'

const style = {
  margin: '30px 150px'
}

export class Home extends Component {
  constructor () {
    super()
    this.state = {
      news: [],
      searchKey: ''
    }
  }

  handleChange (event) {
    this.setState({
      searchKey: event.target.value
    })
    this.fetchNews(event.target.value)
  }

  handleClick (event) {
    this.setState({
      searchKey: ''
    })
  }

  componentDidMount () {
    this.fetchNews('')
  }

  fetchNews (searchQuery) {
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(searchQuery)}`)
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        this.setState({
          news: resp.hits
        })
      })
  }

  render () {
    return (
      <div className='News-list' style={style}>
        <DataSearch handleClick={this.handleClick.bind(this)} searchKey={this.state.searchKey} handleChange={this.handleChange.bind(this)} />
        <DataList news={this.state.news.filter((eachNews) => (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.state.searchKey, 'i')))} />
      </div>
    )
  }
}
