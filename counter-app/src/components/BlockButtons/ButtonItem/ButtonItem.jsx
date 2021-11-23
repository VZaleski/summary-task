import React from 'react';
import stylesButtonItem from'./ButtonItem.module.css';

const ButtonItem = (props) => {

  let valueCurrentElement = React.createRef();

  let increment = () => {
    console.log(valueCurrentElement.current);
  }

  return (
    <button onClick={ increment } className={stylesButtonItem.ButtonItem + " " + `${props.classButton}`}>{props.value}</button>
  );
}

export default ButtonItem;