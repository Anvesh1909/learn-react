import React, { Component } from 'react'

export class Conditioning extends Component {

    // rconst
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    

    render() {

        // if else 
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Conditioning</h1>
                    welcome Anvesh
                </div>
                )
        }
        else{
            return (
                <div>
                    <h1>Conditioning</h1>
                    not logged in
                </div>
                )
        }

        // return (
        // <div>
        //     <h1>Conditioning</h1>

        // </div>
        // )
    }
}

export default Conditioning