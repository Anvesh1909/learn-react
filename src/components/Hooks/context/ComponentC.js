import React from 'react'

import { UserContext } from './ComponentA'

function ComponentC() {
  return (
    <div>
        ComponentC
        <UserContext.Consumer>
            {
                user => {
                    return <div > User Context value {user}</div>
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC