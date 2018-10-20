import React, { Component } from 'react'
import KeysList from './KeysList'
import Key from './Key/Key'

class Keypad extends Component {
  renderKeys(list) {
    return list.map(e => <Key key={e} keypadKey={e} />)
  }
  render() {
    return (
      <div className="Keypad">
        { this.renderKeys(KeysList) }
      </div>
    )
  }
}

export default Keypad
