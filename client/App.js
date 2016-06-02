import React from 'react'
import { Link } from 'react-router'

const App = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    children: React.PropTypes.any,
  },

  render() {
    const name = this.props.data.name;
    return (
      <div>
        <h1>{`Hello my name is ${name || 'John Smith'}!`}</h1>
        {this.props.children}
        <hr/>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/contact">Contact</Link>
      </div>
    )
  },
})

export default App
