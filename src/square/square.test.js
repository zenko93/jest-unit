const square = require('./square');

describe('square', () => {
    // Before each test
    beforeEach(() => {
        jest.clearAllMocks()
    })
    // One time before all tests
    beforeAll(() => {

    })

    test('Correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    })

    test('Correct value', () => {
        const spyMathPow = jest.spyOn(Math, "pow")
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })

    test('Correct value', () => {
        const spyMathPow = jest.spyOn(Math, "pow")
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

})