import React from 'react';
import propTypes from 'prop-types';

import { Wrapper } from './button.style';

const Button = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: propTypes.string,
  callback: propTypes.func,
};

export default Button;
