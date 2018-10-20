import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Key.css'

class Key extends Component {
  render() {
    const { keypadKey } = this.props
    return (
      <div className="Key">
        { keypadKey }
      </div>
    )
  }
}

Key.propTypes = {
  keypadKey: PropTypes.string.isRequired
}

export default Key
