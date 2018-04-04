import * as React from 'react';
import '@/LazyComponent.less'; 
import { connect } from 'react-redux';

export class LazyComponent extends React.Component<{ appName: string }, {}> {
    render() {
        return <h1>{this.props.appName} Hello from a lazily loaded component!</h1>;
    }
}

export default connect((state: any) => {
    return ({appName: state.app.appName});
})(LazyComponent);
