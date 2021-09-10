import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function TickerInfoDetail({ name, item }) {
  return (
    <Wrapper>
      <strong>{name}: </strong> <span>{item}</span>
    </Wrapper>
  );
}

TickerInfoDetail.propTypes = {
  item: PropTypes.any,
  name: PropTypes.string,
};

export default TickerInfoDetail;
