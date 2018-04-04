import * as React from 'react';
import './Demo.less';
/**
 * Demo properties.
 */
interface IDemoProps {
  /** subtitle displayed underneath the demo components */
  subtitle?: string;
}

/**
 * Demo component.
 */
export class Demo extends React.Component<IDemoProps, {}> {

  render() {
    return (
    <div className="demo">
      <h2>Demo component</h2>
      <small>{this.props.subtitle}</small>
    </div>
    );
  }
}

export default Demo;
