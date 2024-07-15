import React from 'react'

import './appStyles.css'

import stylesError from './appStyles.module.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function InlineCss() {
  return (
    <div>
        <h1 style={heading}>InlineCss</h1>
        <h1 className={stylesError.error}>error</h1>
        <h1 className='success'> success</h1>
    </div>
  )
}

export default InlineCss