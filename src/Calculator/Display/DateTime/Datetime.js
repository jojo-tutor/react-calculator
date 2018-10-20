import React, { Component } from 'react'
import moment from 'moment'
import './DateTime.css'

class DateTime extends Component {
    state = {
        dateTime: this.getDateTime()
    }
    componentDidMount() {
        this.updateDateTime = setInterval(() => {
            this.setState({ dateTime: this.getDateTime() })
        })
    }
    componentWillUnmount() {
        clearInterval(this.updateDateTime)
    }
    getDateTime() {
        return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
    render() {
        return (
            <div className="DateTime">
            { this.state.dateTime }
            </div>
        )
    }
}

export default DateTime
