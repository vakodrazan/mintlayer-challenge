/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_REPOS,
  LOAD_TICKER,
  LOAD_TICKER_LIST,
} from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  tickerLoaded,
  tickerLoadingError,
  tickerListLoaded,
} from 'containers/App/actions';

import request from 'utils/request';
import {
  makeSelectUsername,
  makeSelectTickerSymbol,
} from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getTicker() {
  const url = 'https://api-pub.bitfinex.com/v2/';

  const selectedTicker = yield select(makeSelectTickerSymbol());
  const pathParams = `ticker/${selectedTicker}`;
  const queryParams = '';

  const requestURL = `${url}/${pathParams}?${queryParams}`;

  try {
    const ticker = yield call(request, requestURL, { method: 'GET' });
    yield put(tickerLoaded(ticker));
  } catch (err) {
    yield put(tickerLoadingError(err));
  }
}

export function* getTickerList() {
  const requestURL = 'https://api-pub.bitfinex.com/v2/tickers?symbols=ALL';

  try {
    const tickers = yield call(request, requestURL, { method: 'GET' });

    yield put(tickerListLoaded(tickers));
  } catch (err) {
    yield put(tickerLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_TICKER, getTicker);
  yield takeLatest(LOAD_TICKER_LIST, getTickerList);
}
