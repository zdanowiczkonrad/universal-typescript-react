import * as React from 'react';
import Layout from '@/Layout';
import Counter from '@/Counter';
import '@/App.css';
import '@/App.less';
import '@/App.scss';
import { Provider } from 'react-redux'; 
import { store } from '@/store';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends React.Component {

  render() {
    return (
      <Layout>
        <Provider store={store}>
          <Counter />
        </Provider>
      </Layout>
    );
  }
}
