import React, { Component } from 'react'
import DateTime from './DateTime/Datetime'
import PreviousInput from './PreviousInput/PreviousInput'
import Input from './Input/Input'
import './Display.css'

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <PreviousInput/>
        <Input/>
      </div>
    )
  }
}

export default Display
