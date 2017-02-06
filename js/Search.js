import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows.filter((show) => (
            `${show.title} ${show.description}`.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0
          )).map((show) =>
            <ShowCard key={show.imdbID} {...show} />
          )}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: arrayOf(shape({
    title: string,
    description: string
  })),
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export const Unwrapped = Search

export default connect(mapStateToProps)(Search)
