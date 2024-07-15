import React, { Component } from 'react'


export class RefDemo extends Component {

    constructor(props) {
      super(props) 
      this.inputFocus = React.createRef()
    }

    componentDidMount(){
        this.inputFocus.current.focus();
        console.log(this.inputFocus);
    }
    
    handleSubmit = () => {
        alert(this.inputFocus.current.value);
         
    }   


  render() {
    return (
      <div>
        <h1>RefDemo</h1>
        <input type='text' placeholder='Username' ref={this.inputFocus}></input>
        <input type='password'></input>
        
        <button onClick={this.handleSubmit}>Submit</button>
        <br></br>
        direct focus on the username field

        <hr></hr>
      </div>
    )
  }
}

export default RefDemo