import React from 'react'




const funGreet = () => <p>Fun Greet</p>


function Greet() {
  
  let x = funGreet()


  return (
    <div>
    
      <h1>functionComponent</h1>

      {x}

    </div>
  )
}



export default Greet