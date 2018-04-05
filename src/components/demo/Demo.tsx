import * as React from 'react';
import './Demo.less';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { moo, IMooContext } from '@/context/Moo';

export interface IDemoProps {
  /** subtitle displayed underneath the demo components. use when it is needed */
  subtitle?: string;
  /** t translation */
  t?: TranslationFunction;
}

/**
 * Demo component
 */
@moo
export class Demo extends React.Component<IDemoProps, {}> {
  context: IMooContext;
  render() {
     /* tslint:disable:no-console */
    console.log(this.context);
    if (this.context.moo) {
      this.context.moo.sayMoo('Tim');
    } 
     /* tslint:enable:no-console */
    return (
    <div className="demo">
      <h1>Demo component</h1>
      {this.props.t('hello')}
      <small>{this.props.subtitle}</small>
    </div>
    );
  }
}

/**
 * Important. always split the default export of the component with a const variable 
 * instead of inlining it to help Styleguidist interpret props & methods.
 * 
 * A rule of a thumb for components is to always export as default the component
 * to have the consistency (but this is annoying)
 */
const DemoContainer = translate('translations')(Demo);
export default DemoContainer;
