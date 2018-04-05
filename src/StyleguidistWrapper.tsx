import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from '@/i18n';
import { store } from '@/store';

export default class Wrapper extends React.Component<{}, {}> {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </I18nextProvider>
    );
  }
}
