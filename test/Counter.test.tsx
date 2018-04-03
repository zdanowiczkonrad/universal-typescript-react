// test file
import { shallow, mount } from 'enzyme';
import React from 'react';
import Counter from '@/Counter';
import { Provider, Store } from 'react-redux';
import { store } from '@/store';
/**
 * Because counter is using a module that is asynchronously loaded,
 * Not yet sure how to wait for it.
 * That's why there's done and setTimeout.
 * Because we won't use dynamic imports much and we'll have a huge control over it
 * This is actually a wise way to test it instead of transforming it to be a sync imports
 */
describe('Counter', () => {
    it('Deep rendering with Enzyme', (done) => {
        const deepRender = mount( <Provider store={store}><Counter /></Provider>);
        setTimeout(() => {
            expect(deepRender.html())
            .toBe(`<div><h2>Counter: 0</h2><h1>Yay, Redux! Hello from a lazily loaded component!</h1></div>`);
            deepRender.unmount();
            done();
        }, 100);
      
    });
});