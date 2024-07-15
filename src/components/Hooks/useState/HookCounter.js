import React, { useState } from 'react'



function HookCounter() {

    const [count,setCount] = useState(0);

    return (
        <div>
            HookCounter<br></br>
            <button onClick={() => setCount( count+1 )}>Count : {count}</button>

            <hr></hr>
            
        </div>
    )
}

export default HookCounter