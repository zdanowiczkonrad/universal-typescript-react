import * as React from 'react';
import { Dispatch, connect } from 'react-redux';
import { push } from 'react-router-redux';
import { PreloadedComponentLoader } from '@/PreloadedComponent';

/* tslint:disable:no-console */
const deferredOpenDemoPageAction = () => (dispatch: Dispatch<any>, getState: () => any) => {
  console.log('thunked action demo');
  console.log(getState());
  setTimeout(
    () => {
      console.log('ok, happened!');
      dispatch(push('/demo'));
    }, 
    1000);
};

export class Menu extends React.Component<{ dispatch?: Dispatch<any> }, {}> {
  preloadDemoComponent = () => {
    PreloadedComponentLoader.preload();
  }

  render() {
    const { dispatch } = this.props;
    return (
      <strong>menu:
        <span style={{ textDecoration: 'underline' }} onClick={() => dispatch(push('/counter'))}>Counter</span>_
        <span onMouseOver={this.preloadDemoComponent} style={{ textDecoration: 'underline' }} onClick={() => dispatch(deferredOpenDemoPageAction())}>Demo</span>
      </strong>
    );
  }
}

export default connect()(Menu);
