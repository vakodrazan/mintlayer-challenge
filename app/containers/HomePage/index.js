import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectTickerInfo,
} from 'containers/App/selectors';

import ListItem from 'components/ListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import { loadTicker, loadTickerList } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import { selectTicker } from './actions';
import { makeSelectTickerSymbol } from './selectors';
import TickerInfo from '../../components/TickerInfo';

const key = 'home';

export function HomePage({
  loading,
  error,
  selectedTicker,
  getTicker,
  ticker,
  getTickerList,
  onChangeTicker,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getTickerList();
  }, []);

  useEffect(() => {
    getTicker();
  }, [selectedTicker]);

  const tickerListProps = {
    loading,
    error,
    ticker,
    selectedTicker,
  };

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  const tickerList = ticker && ticker.tickerList ? ticker.tickerList : [];

  return (
    <article>
      <select onChange={onChangeTicker} value={selectedTicker}>
        {tickerList.map(item => {
          const tickerSymbol = item[0];
          return (
            <option key={tickerSymbol} value={tickerSymbol}>
              {tickerSymbol}
            </option>
          );
        })}
      </select>
      <TickerInfo {...tickerListProps} />
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  ticker: PropTypes.oneOfType([PropTypes.any, PropTypes.bool]),
  getTicker: PropTypes.func,
  getTickerList: PropTypes.func,
  selectedTicker: PropTypes.string,
  onChangeTicker: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  ticker: makeSelectTickerInfo(),
  selectedTicker: makeSelectTickerSymbol(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTicker: event => dispatch(selectTicker(event.target.value)),
    getTickerList: () => {
      dispatch(loadTickerList());
    },
    getTicker: () => {
      dispatch(loadTicker());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
