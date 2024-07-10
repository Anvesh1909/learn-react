
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import Hello from "./components/helloworld";
// import Anvesh_NavBar from './components/Anvesh_NavBar';
import AlertComponent from './components/AlertComponent';

import ClassComponent from './components/ClassComponent';

import Greet from './components/funcomponents';

import JSXSyntax from './components/JSXSyntax';

import PropComponets from './components/PropComponets';

import PropsClassComponent from './components/PropsClassComponent';

import StatecComponent from './components/StatecComponent';

import ButtonCounter from './components/ButtonCounter';

import EventHandler from './components/EventHandler';

import ParentComponent from './components/ParentComponent';

import Conditioning from './components/conditioning';

import ListItems from './components/ListItems';

function App() {
  return (
    <div className="App">
      <Hello name= 'Anvesh'/>
      {/* <Anvesh_NavBar />  */}
      <hr />

      <Greet />
      <hr />

      <AlertComponent ></AlertComponent>
      <hr />
      
      <JSXSyntax></JSXSyntax>
      <hr />

      <PropComponets name= 'Anvesh' passorfail = 'true' />
      <PropComponets name= 'Bunny' passorfail ='false'/>
      <hr />

      <PropComponets name= 'children' passorfail ='false'>
        <h1>this is propchildern</h1>
      </PropComponets>
      <hr />

      <ClassComponent></ClassComponent>
      <hr />
      
      <PropsClassComponent name= 'Anvesh' />
      <hr />

      <StatecComponent></StatecComponent>
      <hr/>

      <ButtonCounter></ButtonCounter>
      <hr/>

      <EventHandler></EventHandler>
      <hr/>

      <ParentComponent name="hbvbisrbvuiw"></ParentComponent>
      <hr />

      <Conditioning></Conditioning>
      <hr />

      <ListItems></ListItems>
      <hr />
      <br/><br/><br/><br/>
    </div>
  );
}

export default App;
