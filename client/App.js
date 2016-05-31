import React from 'react'

const App = React.createClass({
  propTypes: {
    name: React.propTypes.string,
  },

  render() {
    <div>{`Hello ${this.props.name || 'world'}!`}</div>
  },
})

export default App
