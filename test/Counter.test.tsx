// test file
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Counter from '@/Counter';


describe('Counter', () => {
    it('Shallow rendering with Enzyme', () => {
        const shallowCounter = shallow(<Counter />);
        expect(shallowCounter.html()).toBe('<h2>Counter: 0</h2>');
    });

    it('Deep rendering with Enzyme', () => {
        const deepRender = mount(<Counter />);
        expect(deepRender.html()).toBe('<h2>Counter: 0</h2>');
        deepRender.unmount();
    });
});