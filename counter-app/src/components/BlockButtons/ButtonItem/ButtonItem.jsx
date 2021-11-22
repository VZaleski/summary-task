import React from 'react';
import stylesButtonItem from'./ButtonItem.module.css';

const ButtonItem = (props) => {
  console.log(props);
  console.log(props.classButton);
  return (
    <button className={stylesButtonItem.ButtonItem + " " + `${props.classButton}`}>{props.value}</button>
  );
}

export default ButtonItem;