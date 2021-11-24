import React from 'react';
import stylesButtonItem from'./ButtonItem.module.css';

const ButtonItem = (props) => {
  return (
    <button className={ stylesButtonItem.ButtonItem } onClick={props.function}>{props.name}</button>
  );
}

export default ButtonItem;