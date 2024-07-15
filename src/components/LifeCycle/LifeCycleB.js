import React, { Component } from 'react'


export class LifeCycleB extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           name : 'B'
        }
        console.log('lifecycle B constructor')
      }
  
      static getDerivedStateFromProps(props, state){
          console.log('lifecycle B getDerivedStateFromProps');
          return null
      }
  
      componentDidMount(){
          console.log('lifecycle B componentDidMount'); 
      }
      

        shouldComponentUpdate(){
            console.log('lifecycle b shouldComponentUpdate') ;
            return true
        }

        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('lifecycle b getSnapshotBeforeUpdate') ;
            return null;
        }

        componentDidUpdate(){
            console.log('lifecycle b componentDidUpdate') ;
        }

        render() {
            console.log('lifecycle B render')

            return (
            <div>
                LifeCycleB
                <ol>
                    <li>constructor</li>
                    <li>getDerivedStateFromProps</li>
                    <li>render</li>
                    <li>componentDidMount</li>
                </ol>
                
            </div>
            )
        }
}

export default LifeCycleB