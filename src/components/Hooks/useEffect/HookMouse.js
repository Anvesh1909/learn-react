import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const logMousePosition = e => {
        console.log('logMousePosition')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() =>{
        console.log('useEffect in Hook Mouse');
        window.addEventListener('mousemove' , logMousePosition)

        return () =>{
          console.log('component mouse unmounted');
          window.removeEventListener('mousemove', logMousePosition);
          
        }
    },[])

    // run useEffect only once  , []

  return (
    <div>
        HookMouse
        X = {x} ,Y = {y}
    </div>
  )
}

export default HookMouse