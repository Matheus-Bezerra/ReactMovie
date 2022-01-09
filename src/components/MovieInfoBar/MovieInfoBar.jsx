import React from 'react';
import propTypes from 'prop-types';

import { calcTime, convertMoney } from '../../helpers';

import { Wrapper, Content } from './MovieInfobar.styles';

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running time: {calcTime(time)}</p>
        </div>
        <div className="column">
          <p>budget: {convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

MovieInfoBar.propTypes = {
  time: propTypes.number,
  budget: propTypes.number,
  revenue: propTypes.number,
};

export default MovieInfoBar;
