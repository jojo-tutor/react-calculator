import React, { Component } from 'react'
import DateTime from './DateTime/Datetime'
import ShowHideHistory from './ShowHideHistory/ShowHideHistory'
import Result from './Result/Result'
import './Display.css'

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <div className="DateTime-ShowHideHistory">
          <DateTime/>
          <ShowHideHistory/>
        </div>
        <Result/>
      </div>
    )
  }
}

export default Display
