import React from 'react';
import PropTypes from 'prop-types';

function Option({ item }) {
  const tickerSymbol = item[0];

  return <option value={tickerSymbol}>{tickerSymbol}</option>;
}

Option.propTypes = {
  item: PropTypes.any,
};

export default Option;
