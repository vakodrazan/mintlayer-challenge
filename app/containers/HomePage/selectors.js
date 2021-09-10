/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectTickerSymbol = () =>
  createSelector(
    selectHome,
    homeState => homeState.selectedTicker,
  );

export { selectHome, makeSelectUsername, makeSelectTickerSymbol };
