import * as React from 'react';
// import '@/LazyComponents.less'; // TBD!
export default class LazyComponentDefaultExport extends React.Component<{}, {}> {
    render() {
        return <h1>Hi, I am lazy component exported as default</h1>;
    }
}

export class LazyComponentNamedExport extends React.Component<{}, {}> {
    render() {
        return <h1>Hi, I am a named lazy component</h1>;
    }
}