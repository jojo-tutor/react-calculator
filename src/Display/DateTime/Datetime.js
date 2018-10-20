import React, { Component } from 'react'
import moment from 'moment'

class DateTime extends Component {
  render() {
    return (
      <div className="DateTime">
        { moment().format('MMMM Do YYYY, h:mm:ss a') }
      </div>
    )
  }
}

export default DateTime
