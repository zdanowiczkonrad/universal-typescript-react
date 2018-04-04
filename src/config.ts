interface IConfig {
  isDevelopment: boolean;
  /** Runtime environment of the app */
  env: 'dev' | 'stage' | 'prod';
  /** Is this a browser-targeted bundle? */
  isBrowser: boolean;
  /** Is this a test run? */
  isTest: boolean;
}

export const config: IConfig = {
  env: 'dev',
  isDevelopment: process.env.NODE_ENV !== 'production',
  isTest: process.env.IS_TEST === 'true',
  isBrowser: process.env.IS_BROWSER === 'true'
};

/* tslint:disable:no-console */
console.debug('Running the app with the config', config);
