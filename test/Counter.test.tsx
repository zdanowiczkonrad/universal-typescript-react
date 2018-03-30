// test file
import { shallow, mount } from 'enzyme';
import React from 'react';
import Counter from '@/Counter';
import { Provider, Store } from 'react-redux';

/**
 * Because counter is using a module that is asynchronously loaded,
 * Not yet sure how to wait for it.
 * That's why there's done and setTimeout.
 * Because we won't use dynamic imports much and we'll have a huge control over it
 * This is actually a wise way to test it instead of transforming it to be a sync imports
 */
describe('Counter', () => {
    it('Shallow rendering with Enzyme', (done) => {
        const shallowCounter = shallow(
        <Provider store={{} as Store<{}>}>
            <Counter />
        </Provider>);
        setTimeout(() => {
            expect(shallowCounter.html())
            .toBe(`<div><h2>Counter: 0</h2><h1>Hi, I am lazy component exported as default</h1></div>`);
            done();
        }, 100);
       
    });

    it('Deep rendering with Enzyme', (done) => {
        const deepRender = mount(<Counter />);
        setTimeout(() => {
            expect(deepRender.html())
            .toBe(`<div><h2>Counter: 0</h2><h1>Hi, I am lazy component exported as default</h1></div>`);
            deepRender.unmount();
            done();
        }, 100);
      
    });
});