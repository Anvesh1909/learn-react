import React, { useEffect, useState } from 'react'

function HookEffect2() {


    const [count , setCount] = useState(0)

    const [name, setName] = useState('')

    const updateTitle = () =>{
        console.log('useEffect2');
        document.title = `HookEffect2 clicked ${count} times`;
    }

    useEffect( updateTitle ,[count])

    // or
    // useEffect(()=>{
    //     document.title = `you clicked ${count} times`;
    // })

    return (
        <div>
            HookLifeCycle2<br></br>

            <input type='text'value={name} onChange={e=> setName(e.target.value)}></input>
            <button onClick={() => setCount(count+1)}>clicked :{count}</button>
        </div>
    )
}

export default HookEffect2