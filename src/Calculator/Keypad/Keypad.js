import React, { Component } from 'react'
import { Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import KeysList, { Special, Exclude } from './KeysList'
import Key from './Key/Key'
import './Keypad.css'

class Keypad extends Component {
  handleKeyChange = e => {
    console.log('@value', e)
  }
  renderKeys(list) {
    return list.map(e => <Key key={e} keypadKey={e} onKeyChange={() => this.handleKeyChange(e)}/>)
  }
  renderHotkeys() {
    return (
      <Hotkeys>
          {KeysList
            .filter(e => !Exclude.includes(e))
            .map(e => (
              <Hotkey
                key={e}
                global={true}
                combo={Object.keys(Special).includes(e) ? Special[e] : e}
                onKeyDown={() => console.log("Awesome!", e)}
              />
          ))}
      </Hotkeys>
    )
  }
  render() {
    
    return (
      <div className="Keypad">
        { this.renderKeys(KeysList) }
      </div>
    )
  }
}

export default HotkeysTarget(Keypad)
