import React, { Component } from 'react'

export class EventHandler extends Component {

    // rconst
    constructor(){
        super()
        this.state = {
            message : 'welcome to Event handler'
        }
    }

    changeMessage = () => {
        this.setState({
            message : 'message event handler component changed'
        })
    }

  render() {

    return (
      <div>

        <h1>EventHandler</h1>
        <p>{this.state.message}</p>

        <p>onClick button to change the state message</p>

        <button onClick={this.changeMessage}>change</button>
      </div>
      
    )
  }
}

export default EventHandler