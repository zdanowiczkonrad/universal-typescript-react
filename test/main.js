/* eslint-disable */
// import 'babel-polyfill';

const testsContext = require.context('./', true, /\.test\.ts(x?)$/);
testsContext.keys().forEach(testsContext);