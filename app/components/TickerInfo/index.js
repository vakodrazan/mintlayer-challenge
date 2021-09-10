import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Wrapper from './Wrapper';
import TickerInfoDetail from '../TickerInfoDetail';
import H2 from '../H2';

function TickerInfo({ loading, error, ticker, selectedTicker }) {
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
      <div>
        <H2>{selectedTicker}</H2>
        <Wrapper>
          <TickerInfoDetail name="VOL" item={volume} />
          <TickerInfoDetail name="LOW" item={low} />
          <TickerInfoDetail name="last Price" item={lastPrice} />
          <TickerInfoDetail
            name="daily Change"
            item={`${dailyChange} / ${dailyChangeRelative * 100}%`}
          />
          <TickerInfoDetail name="HIGH" item={high} />
          <TickerInfoDetail name="Bid" item={bid} />
          <TickerInfoDetail name="Bid size" item={bidSize} />
          <TickerInfoDetail name="Ask" item={ask} />
          <TickerInfoDetail name="Ask size" item={askSize} />
        </Wrapper>
      </div>
    );
  }

  return null;
}

TickerInfo.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  ticker: PropTypes.any,
  selectedTicker: PropTypes.string,
};

export default TickerInfo;
