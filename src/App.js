import * as tslib_1 from "tslib";
import * as React from 'react';
import Layout from './Layout';
import Counter from './Counter';
// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Layout, null,
            React.createElement(Counter, null)));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map