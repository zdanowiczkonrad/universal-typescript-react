import { routerReducer } from 'react-router-redux';
import { Reducer, combineReducers } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { config } from '@/config';

export const history = config.isBrowser ? 
  createBrowserHistory() :
  createMemoryHistory();

export const rootReducer: Reducer = combineReducers({
  app: () => ({appName: 'Yay, Redux!'}),
  router: routerReducer
});
