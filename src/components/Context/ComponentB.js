import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentB extends Component {
  render() {
    return (
      <div>
        ComponentB
        <UserConsumer>
        {
            (username) =>{
                return <h1>Hello {username}</h1>
            }
        }
        </UserConsumer>
        
    </div>
    )
  }
}

export default ComponentB