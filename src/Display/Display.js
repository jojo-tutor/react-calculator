import React, { Component } from 'react'
import DateTime from './DateTime/Datetime'
import ShowHideHistory from './ShowHideHistory/ShowHideHistory'

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <DateTime/>
        <ShowHideHistory/>
        Display Result
      </div>
    )
  }
}

export default Display
