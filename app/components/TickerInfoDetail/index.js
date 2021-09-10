import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function TickerInfoDetail({ item }) {
  return (
    <Wrapper>
      <div>{item}</div>
    </Wrapper>
  );
}

TickerInfoDetail.propTypes = {
  item: PropTypes.any,
};

export default TickerInfoDetail;
