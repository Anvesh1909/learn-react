import React, { Component } from 'react'

import AlertComponent from './AlertComponent'

import ClassComponent from './ClassComponent';

import Greet from './funcomponents';

import JSXSyntax from './JSXSyntax';

import PropComponets from './PropComponets';


import PropsClassComponent from './PropsClassComponent'


import StatecComponent from './StatecComponent';

import EventHandler from './EventHandler';

import Conditioning from './conditioning';

import ParentComponent from './ParentComponent';


export class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <hr></hr>
        <Greet />
        <hr />

        <AlertComponent ></AlertComponent>
        <hr />
        
        <JSXSyntax></JSXSyntax>
        <hr />

        <ClassComponent></ClassComponent>
        <hr />


        <PropComponets name= 'Anvesh' passorfail = 'true' />
        <PropComponets name= 'Bunny' passorfail ='false'/>
        <hr />

        <PropComponets name= 'children' passorfail ='false'>
          <h1>this is propchildern</h1>
        </PropComponets>
        <hr />

        <PropsClassComponent name= 'Anvesh' />
        <hr />

        <StatecComponent></StatecComponent>
        <hr/>

        <EventHandler></EventHandler>
        <hr/>

        <Conditioning></Conditioning>
        <hr />

        <ParentComponent name="hbvbisrbvuiw"></ParentComponent>
        <hr />
      </div>
    )
  }
}

export default Hello
