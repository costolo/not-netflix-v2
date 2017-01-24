import React, { Component } from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {searchTerm: ''}
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (e) {
    this.setState({searchTerm: e.target.value})
  }

  render () {
    return (
      <div className='search'>
        <header>
          <h1>nnv2</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='search' />
        </header>
        <div>
          {preload.shows.filter((show) => (
            `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0
          )).map((show) =>
            <ShowCard key={show.imdbID} {...show} />
          )}
        </div>
      </div>
    )
  }
}

export default Search

