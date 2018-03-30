import Loadable from 'react-loadable';
import * as React from 'react';

const Loader = Loadable({
  loader: (() => {
    return import('./LazyComponent') as any;
  }),
  loading() {
    return <div>Loading default component...</div>;
  }
} );

export class PreloadedComponent extends React.Component<{}, {}> {
  render() {
    return <Loader/>;
  }
}
