import React from 'react'
import ComponentB from './ComponentB'
import HookUseContext from './HookUseContext'


export const UserContext = React.createContext()

function ComponentA() {
  return (
    <div>
        <h1>Context using Hooks</h1>
        ComponentA
        <UserContext.Provider value='Anvesh'>
            <ComponentB></ComponentB>
            <hr></hr>
          <HookUseContext></HookUseContext>
        </UserContext.Provider>

        
    </div>
  )
}

export default ComponentA