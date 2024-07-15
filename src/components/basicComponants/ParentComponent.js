import React, { Component } from 'react'

import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : this.props.name
      }
    }
    
    greet = () => {
        alert(`Hello ${this.state.parentName}`)
    }

  render() {
    return (
      <div>
        <h1>ParentComponent</h1>
        <ChildComponent g= {this.greet} />
      </div>

    )
  }
}

export default ParentComponent