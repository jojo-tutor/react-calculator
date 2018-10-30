import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from "@blueprintjs/core"
import './Key.css'

class Key extends Component {
  render() {
    const { keypadKey, onKeyChange } = this.props
    return (
      <Button id={keypadKey} large intent='primary' className="Key" onClick={onKeyChange}>
        { keypadKey }
      </Button>
    )
  }
}

Key.propTypes = {
  keypadKey: PropTypes.string.isRequired
}

export default Key
