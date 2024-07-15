import React from 'react'
import './Styling_Css.css'


import InlineCss from './InlineCss';


function Styling(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        {/* <h1 className='primary'>styling</h1> */}
        using props to change css 
        <h1 className={`${className} font-xl`}>styling</h1>

        <InlineCss></InlineCss>
        <hr />
    </div>
  )
}

export default Styling