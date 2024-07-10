import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h3>ChildComponent</h3>

        <button onClick={this.props.g}>child Button</button>
      </div>
      
    )
  }
}

export default ChildComponent