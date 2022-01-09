import React, { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './searchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={({ target }) => {
            if (target.value.trim() === '') {
              setState('');
            } else {
              setState(target.value);
            }
          }}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchTerm: propTypes.func,
};

export default SearchBar;
