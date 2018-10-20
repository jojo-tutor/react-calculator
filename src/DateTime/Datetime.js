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
        return moment().format('Do of MMMM YYYY, h:mm:ss A')
    }
    render() {
        return (
            <div className="DateTime">
                System Date and Time: { this.state.dateTime }
            </div>
        )
    }
}

export default DateTime
