
interface IConfig {
  /** Runtime environment of the app */
  env: 'dev' | 'prod';
  /** Is this a browser-targeted bundle? */
  isBrowser: boolean;
  /** Is this a test run? */
  isTest: boolean;
}

export const config: IConfig = {
  env: 'dev',
  isTest: process.env.IS_TEST === 'true',
  isBrowser: process.env.IS_BROWSER === 'true'
};
