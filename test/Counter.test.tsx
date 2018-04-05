// test file
import { shallow, mount } from 'enzyme';
import React from 'react';
import Counter from '@/Counter';
import { Provider, Store } from 'react-redux';
import { store } from '@/store';
import Loadable from 'react-loadable';

describe('Counter', () => {
    it('Deep rendering with Enzyme', (done) => {
        const deepRender = mount( <Provider store={store}><Counter /></Provider>);
        Loadable.preloadAll().then(() => {
            expect(deepRender.html())
            .toBe(`<div class="counter"><h2>Counter: 0</h2><h1>Yay, Redux! Hello from a lazily loaded component!</h1></div>`);
            deepRender.unmount();
            done();
        });
      
    });
});