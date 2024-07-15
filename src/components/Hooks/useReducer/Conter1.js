import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return state*0;
        default:
            return state;
    }
}

function Conter1() {

    const [count , dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        Conter1 
        <br></br>
        {count}
        <br></br>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Conter1