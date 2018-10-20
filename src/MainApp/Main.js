import React, { Component } from 'react'
import { Card, Elevation } from "@blueprintjs/core"
import Calculator from '../Calculator/Calculator'
import History from '../History/History'
import DateTime from '../DateTime/Datetime'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <>
        <Card elevation={Elevation.TWO} className="Main">
          <Calculator/>
          <History/>
        </Card>
        <DateTime/>
      </>
    )
  }
}

export default Main
