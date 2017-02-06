import React, { Component } from 'react'
const { object } = React.PropTypes

class AsyncRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount () {
    this.props.loadingPromise.then((module) => {
      this.component = module.default
      this.setState({loaded: true})
    })
  }

  render () {
    if (this.state.loaded) {
      return <this.component {... this.props.props} />
    } else {
      return <h1>loading...</h1>
    }
  }
}

AsyncRoute.propTypes = {
  props: object,
  loadingPromise: object
}

export default AsyncRoute
