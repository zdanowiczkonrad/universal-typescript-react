import { sum } from '@/calculator/Calculator';

describe('Caculator', () => {
    it('Should add two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
