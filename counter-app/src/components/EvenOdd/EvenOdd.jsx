import React from 'react';
import stylesEvenOdd from './EvenOdd.module.css';

const EvenOdd = () => {
  return (
    <div className={stylesEvenOdd.EvenOdd}>
      <div className={stylesEvenOdd.EvenOddText}>Введено четное число</div>
    </div>
  );
}

export default EvenOdd;