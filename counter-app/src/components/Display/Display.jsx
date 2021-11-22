import React from 'react';
import stylesDisplay from './Display.module.css';

const Display = () => {
  return (
    <div className={stylesDisplay.Display}>
      <div className={stylesDisplay.DisplayNumber}>0</div>
    </div>
  );
}

export default Display;