import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'
const { func, bool, string } = React.PropTypes

class Header extends Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (e) {
    this.props.dispatch(setSearchTerm(e.target.value))
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        onChange={this.handleSearchTermChange}
        value={this.props.searchTerm}
        type='text'
        placeholder='search'
      />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>back</Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            nnv2
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  showSearch: bool,
  searchTerm: string,
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
