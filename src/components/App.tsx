import React, { Component } from 'react'
import './App.css'

export default class App extends Component<AppProps, AppState, any> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
            timeLine: 'December 25, 2017'
        }
    }
    render() {
        return(
            <div className='mainContainer'>
                <div className='tittle'>CountDown to {this.state.timeLine}</div>
                <div>
                    <div className={['time', 'days'].join(' ')}>14 days</div>
                    <div className={['time', 'hours'].join(' ')}>30 hours</div>
                    <div className={['time', 'minutes'].join(' ')}>15 minutes</div>
                    <div className={['time', 'seconds'].join(' ')}>20 seconds</div>
                </div>
                <div>
                    <input placeholder='New date' />
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}
