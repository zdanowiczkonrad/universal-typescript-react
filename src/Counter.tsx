import * as React from 'react';
import { sum } from '@/calculator/Calculator';
import { PreloadedComponent } from '@/PreloadedComponent';

export default class Counter extends React.Component<{}, { counter: number }> {
  interval: number;
  promise: Promise<void>;
  constructor(props: {}) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.promise = new Promise((resolve) => {
      resolve();
    });
    this.interval = window.setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ counter: sum(this.state.counter, 2) });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
    <div className="counter">
      <h2>Counter: {this.state.counter}</h2>
      <PreloadedComponent/>
    </div>
    );
  }
}
