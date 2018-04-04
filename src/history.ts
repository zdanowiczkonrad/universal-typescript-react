import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { config } from '@/config';

export const history = config.isBrowser ? 
  createBrowserHistory() :
  createMemoryHistory();
