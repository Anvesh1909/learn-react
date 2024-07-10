import React from 'react'
import './Styling_Css.css'

function Styling(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        {/* <h1 className='primary'>styling</h1> */}
        using props to change css 
        <h1 className={`${className} font-xl`}>styling</h1>
    </div>
  )
}

export default Styling