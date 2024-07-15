import React, { Component } from 'react'

import { UserProvider } from './UserContext'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
  render() {
    return (
      <div>
        ComponentA
        <UserProvider value="Anvesh">
            <ComponentB></ComponentB>
        </UserProvider>
        without provider directly consumer
        <ComponentB></ComponentB>

      </div>
    )
  }
}

export default ComponentA