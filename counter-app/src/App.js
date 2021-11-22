import React from 'react';
import Display from './components/Display/Display.jsx'
import EvenOdd from './components/EvenOdd/EvenOdd.jsx';
import BlockButtons from './components/BlockButtons/BlockButtons.jsx';
import stylesApp from'./App.module.css';

function App(props) {
  return (
    <div className={stylesApp.App}>
      <Display />
      <EvenOdd />
      <BlockButtons state={props.data}/>
    </div>
  );
}

export default App;
