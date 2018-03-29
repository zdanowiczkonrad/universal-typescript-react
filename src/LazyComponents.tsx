import * as React from 'react';
import '@/LazyComponents.less'; 
import { connect } from 'react-redux';

class LazyComponent extends React.Component<{ appName: string }, {}> {
    render() {
        return <h1>{this.props.appName} Hi, I am lazy component exported as default!</h1>;
    }
}

export class LazyComponentNamedExport extends React.Component<{}, {}> {
    render() {
        return <h1>Hi, I am a named lazy component</h1>;
    }
}

const LazyComponents = connect((state: any) => ({appName: state.appName}))(LazyComponent);
export default LazyComponents;
