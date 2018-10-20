import React, { Component } from 'react'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'
import History from '../History/History'
import './Calculator.css'

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Display/>
        <Keypad/>
        <History/>
      </div>
    )
  }
}

export default Calculator
