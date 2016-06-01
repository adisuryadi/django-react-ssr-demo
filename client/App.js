import React from 'react'

const App = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
  },

  render() {
    return (
      <div>{`Hello ${this.props.name || 'world'}!`}</div>
    )
  },
})

export default App
