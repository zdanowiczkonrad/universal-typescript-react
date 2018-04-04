import { config } from './config';
import { rootReducer, history } from '@/reducers';
import { createStore, applyMiddleware, compose, Reducer } from 'redux';

import { routerMiddleware } from 'react-router-redux';

const RouterMiddleware = routerMiddleware(history);

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export function configureStore(initialState?: any) {
  // configure middlewares
  const middlewares: any[] = [
    RouterMiddleware
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  // create store
  const storeWithHmr = createStore(
    rootReducer,
    initialState!,
    enhancer
  );

  // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = (require('./reducers') as { rootReducer: Reducer });
      storeWithHmr.replaceReducer(nextReducer.rootReducer);
    });
  } 

  return storeWithHmr;
}
const initialStateFromWindow = config.isBrowser ? window.__REDUX_STATE__ : {};
export const store = configureStore(initialStateFromWindow);
