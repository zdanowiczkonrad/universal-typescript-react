import { routerReducer } from 'react-router-redux';
import { Reducer, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const rootReducer: Reducer = combineReducers({
    app: () =>  ({appName: 'Yay, Redux!'}),
    router: routerReducer
  });
