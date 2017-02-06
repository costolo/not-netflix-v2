import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { object, string, func } = React.PropTypes

class Landing extends Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleBrowseAllClick = this.handleBrowseAllClick.bind(this)
  }

  handleSearchTermChange (e) {
    this.props.dispatch(setSearchTerm(e.target.value))
  }

  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.transitionTo('/search')
  }

  handleBrowseAllClick () {
    this.props.dispatch(setSearchTerm(''))
  }

  render () {
    return (
      <div className='landing'>
        <h1>not netflix v2</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='search' />
        </form>
        <Link to='/search' onClick={this.handleBrowseAllClick}>or browse all</Link>
      </div>
    )
  }
}

Landing.contextTypes = {
  router: object
}

Landing.propTypes = {
  searchTerm: string,
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
