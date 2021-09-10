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
  makeSelectTicker,
} from 'containers/App/selectors';

import { loadTicker } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import TickerInfo from '../../components/TickerInfo';

const key = 'home';

export function HomePage({ loading, error, getTicker, ticker }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getTicker();
  }, []);

  const tickerListProps = {
    loading,
    error,
    ticker,
  };

  return (
    <article>
      <TickerInfo {...tickerListProps} />
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  ticker: PropTypes.oneOfType([PropTypes.any, PropTypes.bool]),
  getTicker: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  ticker: makeSelectTicker(),
});

export function mapDispatchToProps(dispatch) {
  return {
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
