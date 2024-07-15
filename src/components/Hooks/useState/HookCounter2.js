import React, { useState } from 'react'

function HookCounter2() {

    const initailCount = 0

    const [count , setCount] = useState(initailCount)

    const increment5 = () =>{
        for (let index = 0; index < 5; index++) {
            // setCount(count+1);
            setCount(prevCount => prevCount + 1 )
            
        }
    }

    return (
        <div>

            HookCounter2

            <p>Count = {count}</p>

            <button onClick={() => setCount(initailCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1 )}>increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1 )} >decrement</button>

            <button onClick={increment5}>+5</button>
        </div>
    )
}

export default HookCounter2