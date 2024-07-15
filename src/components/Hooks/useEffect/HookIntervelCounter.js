import React, { useEffect, useState } from 'react'

function HookIntervelCounter(someProp) {

    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount(prevCount => prevCount + 1)
    }

    

    useEffect(()=>{

        const intervel= setInterval(tick,1000)

        return ()=> {
            clearInterval(intervel)
        }
    },[count])

    return (
        <div>
            HookIntervelCounter
            <h2>{count}</h2>
        </div>
    )
}

export default HookIntervelCounter