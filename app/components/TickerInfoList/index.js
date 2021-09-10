import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import TickerInfoDetail from '../TickerInfoDetail';

function TickerInfoList({ firstItem, secondItem, thirdItem }) {
  return (
    <Wrapper>
      <TickerInfoDetail item={firstItem} />
      <TickerInfoDetail item={secondItem} />
      <TickerInfoDetail item={thirdItem} />
    </Wrapper>
  );
}

TickerInfoList.propTypes = {
  firstItem: PropTypes.any,
  secondItem: PropTypes.any,
  thirdItem: PropTypes.any,
};

export default TickerInfoList;
