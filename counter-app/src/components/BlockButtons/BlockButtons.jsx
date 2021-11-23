import React from 'react';
import stylesBlockButtons from './BlockButtons.module.css';
import rerenderTree from './../../render';

const BlockButtons = (props) => {

  let evenOdd = (number) => {
    if(number % 2 === 0) {
      props.state.EvenOdd.currentText = props.state.EvenOdd.even;
      props.state.Display.currentColor = props.state.EvenOdd.evenColor;
      rerenderTree(props.state);
    } else {
      props.state.EvenOdd.currentText = props.state.EvenOdd.odd;
      props.state.Display.currentColor = props.state.EvenOdd.oddColor;
      rerenderTree(props.state);
    }
  }

  let decrement = () => {
    let number = props.state.Display.currentValue;
    if(number > 0 ) {
      number--;
      props.state.Display.currentValue = number;
      evenOdd(number);
    } else {
      rerenderTree(props.state);
    }
  }

  let reset = () => {
    let number = props.state.Display.currentValue;
    number = 0;
    props.state.Display.currentValue = number;
    props.state.EvenOdd.currentText = props.state.EvenOdd.even;
    props.state.Display.currentColor = props.state.EvenOdd.evenColor;
    rerenderTree(props.state);
  }

  let increment = () => {
    let number = props.state.Display.currentValue;
    number++;
    props.state.Display.currentValue = number;
    evenOdd(number);
  }

  return (
    <div className={stylesBlockButtons.BlockButtons}>
      <button onClick={ decrement } className={stylesBlockButtons.ButtonItem } value={props.state.BlockButtons.buttons[0].value}>{props.state.BlockButtons.buttons[0].name}</button>
      <button onClick={ reset } className={stylesBlockButtons.ButtonItem } value={props.state.BlockButtons.buttons[1].value}>{props.state.BlockButtons.buttons[1].name}</button>
      <button onClick={ increment } className={stylesBlockButtons.ButtonItem } value={props.state.BlockButtons.buttons[2].value}>{props.state.BlockButtons.buttons[2].name}</button>
    </div>
  );
}

export default BlockButtons;