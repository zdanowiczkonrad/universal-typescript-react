/* eslint-disable */
import 'babel-polyfill';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
var testsContext = require.context('./', true, /\.test\.ts(x?)$/);
testsContext.keys().forEach(testsContext);
