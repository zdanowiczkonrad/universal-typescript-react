import { hot } from 'react-hot-loader';
// Load React AFTER hot loader
import * as React from 'react';
import Layout from '@/Layout';
import '@/App.css';
import '@/App.less';
import '@/App.scss';
import { Provider } from 'react-redux'; 
import { store } from '@/store';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '@/history';
import { config } from '@/config';
import { DevTools } from '@/DevTools';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';
import DemoContainer from '@/components/demo/Demo';
import Counter from '@/Counter';
import { MooProvider } from '@/context/Moo';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export const App = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
    <MooProvider>
       <Layout>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/counter" index={true} component={Counter}/>
            <Route path="/demo" component={DemoContainer}/>
          </div> 
        </ConnectedRouter>
        {config.isDevelopment && <DevTools/>}
      </Layout>
      </MooProvider>
    </Provider>
  </I18nextProvider>
);

/* this required to export a root component wrapped in a hot loader function */
/* else, HMR will not preserve local component state */
export default hot(module)(App);
