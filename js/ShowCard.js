import React, { Component } from 'react'
const { string } = React.PropTypes

class ShowCard extends Component {
  render () {
    const { poster, title, year, description } = this.props
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

ShowCard.propTypes = {
  poster: string,
  title: string,
  year: string,
  description: string
}

export default ShowCard
