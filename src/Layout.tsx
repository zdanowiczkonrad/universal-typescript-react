import * as React from 'react';
import  Menu from '@/Menu';

const Layout: React.SFC = ({ children }) => (
  <div>
    <h1>Hello, React and TypeScript and Hot module reload</h1>
    <Menu/>
    {children}
  </div>
);

export default Layout;
