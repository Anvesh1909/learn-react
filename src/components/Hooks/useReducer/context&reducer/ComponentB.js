import React , {useContext} from 'react'

import { countContext } from './ComponentA'


function ComponentB() {

    const CountContext = useContext(countContext)

    return (
        <div>
            componentB
            <button onClick={() => CountContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentB