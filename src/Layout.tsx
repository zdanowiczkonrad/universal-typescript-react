import * as React from 'react';

const Layout: React.SFC = ({ children }) => (
  <div>
    <h1>Hello, React and TypeScript and Hot module reload</h1>
    {children}
  </div>
);

export default Layout;