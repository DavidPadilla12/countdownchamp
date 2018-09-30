import React, { Component } from 'react'
import Clock from './Clock'
import './App.css'

export default class App extends Component<AppProps, AppState, any> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
            deadLine: 'December 25, 2017',
            newDeadLine: ''
        }
    }
    changeDeadLine() {
        this.setState({deadLine: this.state.newDeadLine})
    }
    render() {
        const { deadLine } = this.state
        return(
            <div className='mainContainer'>
                <div className='tittle'>CountDown to {this.state.deadLine}</div>
                <Clock deadline = {deadLine}/>
                <div>
                    <input placeholder='New date'
                        onChange={e => this.setState({newDeadLine: e.target.value})}/>
                    <button onClick={() => this.changeDeadLine()}>Submit</button>
                </div>
            </div>
        )
    }
}
