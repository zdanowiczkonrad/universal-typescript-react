import * as React from 'react';

const Layout: React.SFC = ({ children }) => (
  <div>
    <h1>Hello, React and TypeScript!</h1>
    {children}
  </div>
);

export default Layout;