import Loadable from 'react-loadable';
import * as React from 'react';
import LazyComponents from '@/LazyComponents';
/**
 * Using a raw require.ensure
 * But may use babel-plugin-dynamic-import-node
 * when incorporating babel for sexier and more expressive syntax: () => import(':moduleName')
 */
// const Loader = Loadable({
//   loader: (() => new Promise(resolve =>
//     require.ensure(['@/LazyComponents'], () => resolve(require('@/LazyComponents')))
//   ) as any),
//   loading() {
//     return <div>Loading default component...</div>;
//   }
// } );

const Loader = Loadable({
  loader: (() => new Promise(resolve => {
    if (module.hot) {
      resolve(LazyComponents); 
    } else {
      require.ensure(['@/LazyComponents'], () => resolve(require('@/LazyComponents')));
    }
  }) as any),
  loading() {
    return <div>Loading default component...</div>;
  }
} );

export class PreloadedComponent extends React.Component<{}, {}> {
  render() {
    return <Loader/>;
  }
}
