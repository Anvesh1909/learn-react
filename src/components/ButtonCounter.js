import React, { Component } from 'react'

export class ButtonCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increase = () => {
      this.setState({
        count : this.state.count + 1 
      });
    }

    decrease = () => {
      this.setState({
        count : this.state.count - 1
      });
    }
    
  render() {
    return (
      <div>
        <h1>ButtonCounder</h1>

        <h3>count = {this.state.count}</h3>
        
        <button onClick={this.increase}>i++;</button>
        <button onClick={this.decrease}>i--;</button>

      </div>
    )
  }
}

export default ButtonCounter