import * as React from 'react';
import { render } from 'react-dom';
import App from '@/App';
import { polyfill } from '@/Polyfill';

polyfill();

const rootEl = document.getElementById('root');
render(<App />, rootEl);
