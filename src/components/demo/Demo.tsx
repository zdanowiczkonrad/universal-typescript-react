import * as React from 'react';
import './Demo.less';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

/**
 * Demo properties.
 */
interface IDemoProps {
  /** subtitle displayed underneath the demo components */
  subtitle?: string;
  /** t translation */
  t?: TranslationFunction;
}

/**
 * Demo component.
 */
class Demo extends React.Component<IDemoProps, {}> {

  render() {
    return (
    <div className="demo">
      <h2>Demo component</h2>
      {this.props.t('hello')}
      <small>{this.props.subtitle}</small>
    </div>
    );
  }
}

export default translate('translations')(Demo);
