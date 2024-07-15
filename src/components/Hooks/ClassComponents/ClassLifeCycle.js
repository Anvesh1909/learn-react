import React, { Component } from 'react'

export class ClassLifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps,prevState){
        if (prevState.count !== this.state.count) {
          console.log('updatingg document title');
        }        
        document.title = `clicked ${this.state.count} times`
    }
    

  render() {
    return (
      <div>
        ClassLifeCycle<br></br>

        <input type='text' 
        value={this.state.name}
        onChange={e=>{
          this.setState({
            name : e.target.value
          })
        }}></input>

        <button onClick={() => this.setState({
            count : this.state.count+1
        })}>click {this.state.count}</button>
      </div>
    )
  }
}

export default ClassLifeCycle