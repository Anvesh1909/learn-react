import React, { Component } from 'react'

export class PropsClassComponent extends Component {
  render() {
    return (
      <div>
        welcome to class prop components 
        props passed are :<br/>
        name :{this.props.name}
        {}
      </div>
    )
  }
}

export default PropsClassComponent
