import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Wrapper from './Wrapper';
import TickerInfoList from '../TickerInfoList';

function TickerInfo({ loading, error, ticker }) {
  const [
    bid,
    bidSize,
    ask,
    askSize,
    dailyChange,
    dailyChangeRelative,
    lastPrice,
    volume,
    high,
    low,
  ] = ticker && ticker.tickerInfo ? ticker.tickerInfo : [];

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (ticker.tickerInfo !== false) {
    return (
      <Wrapper>
        <TickerInfoList
          firstItem="BTC/USD"
          secondItem={`VOL ${volume} USD`}
          thirdItem={`LOW ${low}`}
        />
        <TickerInfoList
          firstItem={`last Price ${lastPrice}`}
          secondItem={`daily Change: ${dailyChange} / ${dailyChangeRelative *
            100}%`}
          thirdItem={`HIGH ${high}`}
        />
        <TickerInfoList
          firstItem={`Bid ${bid}`}
          secondItem={`Bid size ${bidSize}`}
        />
        <TickerInfoList
          firstItem={`Ask ${ask}`}
          secondItem={`Ask size ${askSize}`}
        />
      </Wrapper>
    );
  }

  return null;
}

TickerInfo.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  ticker: PropTypes.any,
};

export default TickerInfo;
