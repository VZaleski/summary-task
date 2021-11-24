import React from 'react';
import stylesBlockButtons from './BlockButtons.module.css';
import ButtonItem from './ButtonItem/ButtonItem';

const BlockButtons = (props) => {

  let buttonElements = props.blockButtons.buttons.map( element => <ButtonItem function={element.function} name={element.name} />);

  return (
    <div className={stylesBlockButtons.BlockButtons}>
      { buttonElements }
    </div>
  );
}

export default BlockButtons;