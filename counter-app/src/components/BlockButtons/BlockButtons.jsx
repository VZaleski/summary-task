import React from 'react';
import ButtonItem from './ButtonItem/ButtonItem';
import stylesBlockButtons from './BlockButtons.module.css';

const BlockButtons = (props) => {
  let buttonElements = props.state.BlockButtons.buttons.map( s => <ButtonItem id={s.id} classButton={s.classButton} value={s.value} />);

  return (
    <div className={stylesBlockButtons.BlockButtons}>
      {buttonElements}
    </div>
  );
}

export default BlockButtons;