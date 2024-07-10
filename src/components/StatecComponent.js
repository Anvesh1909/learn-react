import React, { Component } from 'react'

export class StatecComponent extends Component {

    constructor(){
        super()
        this.state = {
            message : 'welcome to state Component'
        }
    }

    changeMessage = () => {
        this.setState({
            message : 'state component changed'
        })
    }

    render() {
        return (
        <div>
            <h1>StatecComponent</h1>
            <p>{this.state.message}</p>

            <p>onClick button to change the state message</p>

            <button onClick={this.changeMessage}>change</button>
        </div>
        )
  }
}

export default StatecComponent
