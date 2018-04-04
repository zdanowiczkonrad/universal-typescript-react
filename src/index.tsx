import * as React from 'react';
import { render } from 'react-dom';
import { polyfill } from '@/Polyfill';
import App from '@/App';

polyfill();

const rootEl = document.getElementById('root');

render(<App />, rootEl);
