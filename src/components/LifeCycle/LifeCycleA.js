import React, { Component } from 'react'

import LifeCycleB from './LifeCycleB'

import FragmentDemo from './FragmentDemo'


export class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'A'
      }
      console.log('lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycle A getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('lifecycle A componentDidMount') ;
    }

    shouldComponentUpdate(){
        console.log('lifecycle a shouldComponentUpdate') ;
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycle a getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('lifecycle a componentDidUpdate') ;
    }
    
    changeState = () =>{
        this.setState({
            name : 'CodeEvolution'
        })
    }

    render() {
        console.log('lifecycle A render')
        return (
        <div>
            LifeCycleA
            <LifeCycleB></LifeCycleB>
            <button onClick={this.changeState}>Change State</button>

            <hr/>
            <FragmentDemo></FragmentDemo>

            <hr></hr>

        </div>
        )
    }



}

export default LifeCycleA