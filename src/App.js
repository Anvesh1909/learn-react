
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Hello from "./components/basicComponants/helloworld";

import ButtonCounter from './components/ButtonCounter';

import ListItems from './components/List/ListItems';

import Styling from './components/Styling/StylingCss';

import Form from './components/forms/Form';

import LifeCycleA from './components/LifeCycle/LifeCycleA';

import Table from './components/Table/Table';

// import ParentComp from './components/PureAndRegularComp/ParentComp';

import RefDemo from './components/ref/RefDemo';

import ComponentA from './components/Context/ComponentA';
import { GetList } from './components/Http/GetList';
import PostForm from './components/Http/PostForm';
import ClassCounter from './components/Hooks/ClassCounter';

function App() {

  return (
    
    <div className="App">
      <Hello name= 'Anvesh'/>
      <hr />

      <ButtonCounter></ButtonCounter>
      <hr/>

      <ListItems></ListItems>
      <hr />

      <Styling primary={false} ></Styling>
      <Styling primary={true} ></Styling>
      <hr />

      <Form></Form>
      <hr />

      <LifeCycleA></LifeCycleA>
      <hr />

      <Table></Table>
      <hr/>


      {/* <ParentComp></ParentComp> */}
      <hr />

      <RefDemo></RefDemo>
      <hr />

      <ComponentA></ComponentA>
      <hr />

      <GetList></GetList>
      <hr />

      <PostForm></PostForm>
      <hr></hr>

      <ClassCounter></ClassCounter>
      <hr></hr>

      <br/><br/><br/><br/>
      
    </div>

  );
}

export default App;
