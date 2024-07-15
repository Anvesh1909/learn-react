import React, { useReducer } from 'react'

import ComponentA from './context&reducer/ComponentA';

const initialState = {
    firstCounter : 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {firstCounter : state.firstCounter + action.value};
        case 'decrement':
            return {firstCounter : state.firstCounter - action.value};
        // case 'increment5':
        //     return {firstCounter : state.firstCounter + 5};
        // case 'decrement5':
        //     return {firstCounter : state.firstCounter - 5};
        case 'reset':
            return initialState
        default:
            return state;
    }
}

function Counter2() {

    const [count , dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Conter1 
            <br></br>
            {count.firstCounter}
            <br></br>
            <button onClick={() => dispatch({type: 'increment' , value : 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement' , value : 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value : 5})}>Increment5</button>
            <button onClick={() => dispatch({type: 'decrement', value : 5})}>Decrement5</button>

            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

            <hr></hr>
            <ComponentA></ComponentA>

        </div>
    )
}

export default Counter2