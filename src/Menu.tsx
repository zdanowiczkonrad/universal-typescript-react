import * as React from 'react';
import { Dispatch, connect } from 'react-redux';
import { push } from 'react-router-redux';

export class Menu extends React.Component<{ dispatch?: Dispatch<any> }, {}> {

  render() {
    const { dispatch } = this.props;
    return (
      <strong>menu:
        <span style={{textDecoration: 'underline'}} onClick={() => dispatch(push('/counter'))}>Counter</span>_ 
        <span style={{textDecoration: 'underline'}} onClick={() => dispatch(push('/demo'))}>Demo</span>
      </strong>
    );
  }
}

export default connect()(Menu);
