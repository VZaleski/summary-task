import React from 'react';
import stylesButtonItem from'./ButtonItem.module.css';

const ButtonItem = (props) => {
  return (
    <button className={ stylesButtonItem.ButtonItem }>{props.value}</button>
  );
}

export default ButtonItem;