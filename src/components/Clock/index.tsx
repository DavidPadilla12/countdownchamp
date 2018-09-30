import React, { Component } from 'react'
import { getDays, getHours, getMinutes, getSeconds } from '../../Util'
import './style.css'

export default class Clock extends Component<ClockProps, ClockState, any> {
    constructor(props: ClockProps) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil()
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(), 1000)
    }

    getTimeUntil() {
        const { deadline } = this.props
        const time = Date.parse(deadline) - Date.parse(new Date().toString()) || 0
        this.setState({
            days: getDays(time),
            hours: getHours(time),
            minutes: getMinutes(time),
            seconds: getSeconds(time)
        })
    }

    render() {
        const { days, hours, minutes, seconds} = this.state
        return(
            <div>
                <div className={['time', 'days'].join(' ')}>{days} days</div>
                <div className={['time', 'hours'].join(' ')}>{hours} hours</div>
                <div className={['time', 'minutes'].join(' ')}>{minutes} minutes</div>
                <div className={['time', 'seconds'].join(' ')}>{seconds} seconds</div>
            </div>
        )
    }
}