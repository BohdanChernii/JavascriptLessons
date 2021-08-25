import { calc } from "./calculator.js"
it('should check type of value', () => {
    const result = calc([154])
    expect(result).toEqual(null);
})
it('should check type of value', () => {
    const result = calc([Symbol])
    expect(result).toEqual(null);
})
it('should check type of value', () => {
    const result = calc([null])
    expect(result).toEqual(null);
})
it('should check type of value', () => {
    const result = calc([NaN])
    expect(result).toEqual(null);
})
it('should check type of value', () => {
    const result = calc([154])
    expect(result).toEqual(null);
})

it('should check "+" operator', () => {
    const result = calc('2 + 2')
    expect(result).toEqual('2 + 2 = 4');
})
it('should check "-" operator', () => {
    const result = calc('2 - 2')
    expect(result).toEqual('2 - 2 = 0');
})
it('should check "-" operator', () => {
    const result = calc('2 * 2')
    expect(result).toEqual('2 * 2 = 4');
})
it('should check "-" operator', () => {
    const result = calc('2 / 2')
    expect(result).toEqual('2 / 2 = 1');
})