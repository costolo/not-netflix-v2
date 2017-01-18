/* global React ReactDOM */

var component = React.createClass({
  render: () => (
    React.DOM.div(null,
      React.DOM.h1(null, 'component')
    )
  )
})
ReactDOM.render(React.createElement(component), document.getElementById('app'))
