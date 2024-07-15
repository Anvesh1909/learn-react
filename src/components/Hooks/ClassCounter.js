import React, { Component } from 'react'

import HookCounter from './useState/HookCounter'
import HookCounter2 from './useState/HookCounter2'
import HookUseState from './useState/HookUseState'
import HookUseState2 from './useState/HookUseState2'
import ClassLifeCycle from './ClassComponents/ClassLifeCycle'
import HookEffect from './useEffect/HookEffect'
import HookEffect2 from './useEffect/HookEffect2'
// import HookMouse from './HookMouse'
import MouseContainer from './useEffect/MouseContainer'
import IntervelClassCounter from './ClassComponents/IntervelClassCounter'
import HookIntervelCounter from './useEffect/HookIntervelCounter'
import FetchUseEffect from './HTTP/FetchUseEffect'
import FetchAll from './HTTP/FetchAll'
import FetchUseEffectButtonClick from './HTTP/FetchUseEffectButtonClick'
import ComponentA from './context/ComponentA'
// import ClassMouse from './ClassMouse'

import Counter1 from './useReducer/Conter1'
import Counter2 from './useReducer/Conter2'

export class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment = () =>{
        this.setState({
            count : this.state.count+1
        })
    }
    

  render() {
    return (
      <div>
        ClassCounter<br></br>
        <button onClick={this.increment}>count : {this.state.count}</button>
        <hr></hr>

        <HookCounter></HookCounter>
        <hr></hr>
        <HookCounter2></HookCounter2>
        <hr></hr>
        <HookUseState></HookUseState>
        <hr></hr>
        <HookUseState2></HookUseState2>

        <hr></hr>
        <ClassLifeCycle></ClassLifeCycle>
        <hr></hr>
        <HookEffect></HookEffect>
        <hr></hr>
        <HookEffect2></HookEffect2>

        <hr></hr>

        {/* <HookMouse></HookMouse> */}
        <MouseContainer></MouseContainer>
        <hr></hr>

        <IntervelClassCounter></IntervelClassCounter>

        <hr></hr>
        <HookIntervelCounter></HookIntervelCounter>

        <hr></hr>
        <FetchAll></FetchAll>
        <hr></hr>
        <FetchUseEffect></FetchUseEffect>
        <hr></hr>
        <FetchUseEffectButtonClick></FetchUseEffectButtonClick>

        <hr></hr>
        <ComponentA></ComponentA>

        <hr></hr>

        <Counter1></Counter1>
        <hr></hr>
        <Counter2></Counter2>
      </div>
    )
  }
}

export default ClassCounter