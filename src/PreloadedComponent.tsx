import * as Loadable from 'react-loadable';
import * as React from 'react';

const Loader = Loadable({
  loader: (() => new Promise(resolve =>
    require.ensure(['@/LazyComponents' /* webpackChunkName: "LazyComponents" */ ], () => resolve(require('@/LazyComponents')))
  ) as any),
  loading() {
    return <div>Loading default component...</div>;
  }
} );

export class PreloadedComponent extends React.Component<{}, {}> {
  render() {
    return <Loader/>;
  }
}
