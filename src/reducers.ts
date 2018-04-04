import { routerReducer } from 'react-router-redux';
import { Reducer, combineReducers, Action } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { config } from '@/config';

export const history = config.isBrowser ? 
  createBrowserHistory() :
  createMemoryHistory();

export const rootReducer: Reducer = combineReducers({
  app: (prevState = { appName: 'Yay, Redux!'}, action: Action<any>) => {
    if (action.type === 'SERVER_PREHYDRATION') {
      return {
        appName: 'Yay, Redux from prehydration!'
      };
    } else {
      return prevState;
    }
},
  router: routerReducer
});
