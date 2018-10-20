import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from "@blueprintjs/core"
import './Key.css'

class Key extends Component {
  render() {
    const { keypadKey } = this.props
    return (
      <Button large intent='primary' className="Key">{ keypadKey }</Button>
    )
  }
}

Key.propTypes = {
  keypadKey: PropTypes.string.isRequired
}

export default Key
