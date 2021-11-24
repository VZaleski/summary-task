import React from 'react';
import stylesDisplay from './Display.module.css';

const Display = (props) => {
  return (
    <div className={stylesDisplay.Display} style={{backgroundColor: `${props.display.currentColor}`}}>
      <div className={stylesDisplay.DisplayNumber}>{props.display.currentValue}</div>
    </div>
  );
}

export default Display;