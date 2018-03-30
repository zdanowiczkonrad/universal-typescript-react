import { createStore, applyMiddleware, compose } from 'redux';
const rootReducer = () => ({appName: 'Redux!'});
const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

function configureStore(initialState?: any) {
  // configure middlewares
  const middlewares: any[] = [

  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    rootReducer,
    initialState!,
    enhancer
  );
}

// pass an optional param to rehydrate state on app start
export const store = configureStore();