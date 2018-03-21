import * as tslib_1 from "tslib";
import * as React from 'react';
var Counter = /** @class */ (function (_super) {
    tslib_1.__extends(Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.tick = function () {
            _this.setState({ counter: _this.state.counter + 2 });
        };
        _this.state = { counter: 0 };
        return _this;
    }
    Counter.prototype.componentDidMount = function () {
        this.interval = setInterval(this.tick.bind(this),100);
    };
    Counter.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    Counter.prototype.render = function () {
        return React.createElement("h2", null,
            "Counter: ",
            this.state.counter);
    };
    return Counter;
}(React.Component));
export default Counter;
//# sourceMappingURL=Counter.js.map