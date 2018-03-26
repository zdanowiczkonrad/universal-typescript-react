import * as Loadable from 'react-loadable';
import * as React from 'react';

const Loader = Loadable({
  loader: () => new Promise<any>((resolve) => {
    return require.ensure(['./ExampleComponent'], () => {
      const { ExampleComponent } = require('./ExampleComponent');
      resolve(ExampleComponent);
    });
  }),
  loading() {
    return <div>Loading...</div>;
  }
} as any);

export class PreloadedComponent extends React.Component<{}, {}> {
  render() {
    return <Loader/>;
  }
}
