import React , {useContext} from 'react'

import { countContext } from './ComponentA'

function ComponentC() {
    const CountContext = useContext(countContext)

    return (
        <div>
            componentC
            <button onClick={() => CountContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => CountContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentC