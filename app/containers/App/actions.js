/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_TICKER,
  LOAD_TICKER_SUCCESS,
  LOAD_TICKER_ERROR,
  LOAD_TICKER_LIST,
  LOAD_TICKER_LIST_SUCCESS,
  LOAD_TICKER_LIST_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

export function loadTicker() {
  return {
    type: LOAD_TICKER,
  };
}
export function loadTickerList() {
  return {
    type: LOAD_TICKER_LIST,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

export function tickerLoaded(ticker) {
  return {
    type: LOAD_TICKER_SUCCESS,
    ticker,
  };
}

export function tickerListLoaded(ticker) {
  return {
    type: LOAD_TICKER_LIST_SUCCESS,
    ticker,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

export function tickerLoadingError(error) {
  return {
    type: LOAD_TICKER_ERROR,
    error,
  };
}

export function tickerListLoadingError(error) {
  return {
    type: LOAD_TICKER_LIST_ERROR,
    error,
  };
}
