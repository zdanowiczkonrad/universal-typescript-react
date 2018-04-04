import { history } from './history';
import { config } from './config';
import { rootReducer } from '@/reducers';
import { createStore, applyMiddleware, compose, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { DevTools } from '@/DevTools';

const RouterMiddleware = routerMiddleware(history);

const composeEnhancers = (
  config.isDevelopment &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export function configureStore(initialState?: any) {
  // configure middlewares
  const middlewares: any[] = [
    RouterMiddleware,
    thunk
  ];
  // compose enhancers
  const enhancers = [applyMiddleware(...middlewares)].concat(
    config.isDevelopment ? 
      DevTools.instrument() :
      []
  );
  
  const enhancer = composeEnhancers(...enhancers);

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
