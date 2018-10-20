import React, { Component } from 'react'
import Display from './Display/Display'
import Keypad from './Keypad/Keypad'
import './Calculator.css'

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Display/>
        <Keypad/>
      </div>
    )
  }
}

export default Calculator
