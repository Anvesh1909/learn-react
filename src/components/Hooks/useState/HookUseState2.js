import React, { useState } from 'react'

function HookUseState2() {

    const [items , setItems ] = useState([]) 


    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10 ) + 1
        }])
    }

  return (
    <div>
        HookUseState2<br></br>
        <button onClick={addItem}>Add a item</button>   
        <ul>
            {
                items.map(item => (
                    <li key= {item.id} >{item.value}</li>
                ))
            }
        </ul> 
    </div>
  )
}

export default HookUseState2