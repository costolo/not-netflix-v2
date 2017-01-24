import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))

