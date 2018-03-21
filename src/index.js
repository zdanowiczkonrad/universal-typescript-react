import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
var rootEl = document.getElementById('root');
var render = function (Component) {
    return ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(Component, null)), rootEl);
};
render(App);
if (module.hot)
    module.hot.accept('./App', function () { return render(App); });
//# sourceMappingURL=index.js.map