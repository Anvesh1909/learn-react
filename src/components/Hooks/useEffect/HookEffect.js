import React, { useEffect, useState } from 'react'

function HookEffect() {


    const [count , setCount] = useState(0)

    

    const updateTitle = () =>{
        document.title = `HookEffect1 clicked ${count} times`;
    }

    useEffect(updateTitle)

    // or
    // useEffect(()=>{
    //     document.title = `you clicked ${count} times`;
    // })

    return (
        <div>
            HookLifeCycle<br></br>
            <button onClick={() => setCount(count+1)}>clicked :{count}</button>
        </div>
    )
}

export default HookEffect