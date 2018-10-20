import React, { Component } from 'react'
import Calculator from '../Calculator/Calculator'
import History from '../History/History'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Calculator/>
        <History/>
      </div>
    )
  }
}

export default Main
