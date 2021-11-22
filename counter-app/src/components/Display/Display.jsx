import React from 'react';
import stylesDisplay from './Display.module.css';

const Display = (props) => {
  return (
    <div className={stylesDisplay.Display}>
      <div className={stylesDisplay.DisplayNumber}>{props.state.Display.currentValue}</div>
    </div>
  );
}

export default Display;