import React from 'react';
import stylesEvenOdd from './EvenOdd.module.css';

const EvenOdd = (props) => {
  return (
    <div className={stylesEvenOdd.EvenOdd}>
      <div className={stylesEvenOdd.EvenOddText}>{props.evenOdd.currentText}</div>
    </div>
  );
}

export default EvenOdd;