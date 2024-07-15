import React,{useReducer} from 'react'

import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import ComponentB from './ComponentB';

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

export const countContext = React.createContext()

function ComponentA() {

    const [count , dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            ComponentA

            <countContext.Provider value={{countState: count , countDispatch : dispatch}}>
                Count = {count}
                <ComponentB></ComponentB>
                <ComponentC></ComponentC>
                <ComponentD></ComponentD>
            </countContext.Provider>

        </div>
    )
}

export default ComponentA