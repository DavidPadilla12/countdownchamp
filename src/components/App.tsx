import React, { Component } from 'react'
import Clock from './Clock'
import { Form, FormControl, Button } from 'react-bootstrap'
import './App.css'

export default class App extends Component<AppProps, AppState, any> {
    constructor(props: AppProps) {
        super(props)
        this.state = {
            deadLine: 'December 25, 2018',
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
                <Form inline>
                    <FormControl placeholder = {deadLine}
                        onChange={(e: any) => this.setState({newDeadLine: e.target.value})}/>
                    <Button bsStyle='success' className={'button-input'}
                        onClick={() => this.changeDeadLine()}>Submit</Button>
                </Form>
            </div>
        )
    }
}
