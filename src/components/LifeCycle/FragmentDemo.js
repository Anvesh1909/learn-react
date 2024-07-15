import React, { Component } from 'react'

export class FragmentDemo extends Component {
  render() {
    return (
        <>
            <div>
                <h1>FragmentDemo</h1>
                <p>this is to describe frangment demo component using div</p>
            </div>
            <React.Fragment>
                <h1>FragmentDemo</h1> 
                <p>this is to describe frangment demo component using React.Fragment</p>
            </React.Fragment>
      </>

    )
  }
}

export default FragmentDemo