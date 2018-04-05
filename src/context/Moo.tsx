import * as React from 'react';
// This is a deprecated context usage, but ok for now (05-04-2018)
import PropTypes from 'prop-types';

class Moo {
    sayMoo(name?: string): void {
        /* tslint:disable:no-console */
        console.log(name ? 'Moo!' : `Moo, ${name}!`);
         /* tslint:enable:no-console */
    }
}

const MOO = new Moo();

/**
 * Autowire context types when used like:
 * <code>
 * @moo
 * class Component {
 *  this.context: IMooContext;
 * ...
 *  this.context.moo.sayMoo();
 * }
 * </code>
 * Requires components to be wrapped inside the MooProvider
 */
export function moo(target: any) {
    target.contextTypes = target.contextTypes || {};
    target.contextTypes['moo'] = PropTypes.object;
}

export interface IMooContext {
    moo: Moo;
}

export class MooProvider extends React.Component<{}, {}> {
    getChildContext() {
        return {
            moo: MOO
        } as IMooContext;
    }

    static childContextTypes = {
        moo: PropTypes.object
    };

    render() {
        return this.props.children;
    }
}
