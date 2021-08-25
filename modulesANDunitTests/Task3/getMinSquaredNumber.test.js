import { getMinSquaredNumber } from "./getMinSquaredNumber.js"

it('should get min squared element', () => {
    const result = getMinSquaredNumber([10, -2, 4, 5, 10, ])
    expect(result).toEqual(4);
});

it('should get min squared element', () => {
    const result = getMinSquaredNumber([10, -2, 1, 5, 10, ])
    expect(result).toEqual(1);
});

it('should get min squared element', () => {
    const result = getMinSquaredNumber([10, -20, 0, 5, 10, ])
    expect(result).toEqual(0);
});