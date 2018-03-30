import * as React from 'react';
import '@/LazyComponents.less'; 
import { connect } from 'react-redux';

export class LazyComponent extends React.Component<{ appName: string }, {}> {
    render() {
        return <h1>{this.props.appName} Hi!, I am lazy component exported as default!1</h1>;
    }
}

const LazyComponents = connect((state: any) => ({appName: state.appName}))(LazyComponent);
export default LazyComponents;
