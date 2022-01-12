import React, { useEffect, useState, useRef } from 'react';
import bedTime from '../../images/bedtime.svg';
import brightness from '../../images/brightness_5.svg';
import { Wrapper } from './Theme.styles';

const Theme = () => {
  const [dark, setDark] = useState(false);
  const body = document.querySelector('body');
  const icon = React.useRef();
  useEffect(() => {
    if (dark) {
      body.classList.add('night');
      icon.current.setAttribute('src', `${brightness}`);
      return;
    }
    icon.current.setAttribute('src', `${bedTime}`);
    body.classList.remove('night');
  }, [dark, body]);
  return (
    <Wrapper onClick={() => setDark(!dark)}>
      <img src={bedTime} alt="Alter-Theme" ref={icon} />
    </Wrapper>
  );
};

export default Theme;
