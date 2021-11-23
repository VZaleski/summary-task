import React from 'react';
import stylesEvenOdd from './EvenOdd.module.css';

const EvenOdd = (props) => {
  return (
    <div className={stylesEvenOdd.EvenOdd}>
      <div className={stylesEvenOdd.EvenOddText}>{props.state.EvenOdd.currentText}</div>
    </div>
  );
}

export default EvenOdd;