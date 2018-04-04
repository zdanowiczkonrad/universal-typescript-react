import * as React from 'react';
import Layout from '@/Layout';
import Counter from '@/Counter';
import '@/App.css';
import '@/App.less';
import '@/App.scss';
import { Provider } from 'react-redux'; 
import { store } from '@/store';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '@/reducers';
import { Demo } from '@/Demo';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
const App = () => (
    <Provider store={store}>
       <Layout>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/counter" index={true} component={Counter}/>
            <Route path="/demo" component={Demo}/>
          </div> 
        </ConnectedRouter>
      </Layout>
    </Provider>
 
);

export default hot(module)(App);
