import { reverseArray, withdraw, getAdults } from './exsercises.js'
it('should check is array in reverseArray ', () => {
    const result = reverseArray('string')
    expect(result).toEqual(null)
})
it('should check is arr reversed in reverseArray ', () => {
        const result = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(result).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
    // как зделать проверку, изменился ли исходник?
    // it('should check is original arr changed in reverseArray ', () => {
    //     const result = reverseArray()
    //     expect(result).toEqual()
    // })

it('should return rest of balance ', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50)
    expect(result).toEqual(1350)
})
it('should return -1 if rest of balance smaller amont ', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50)
    expect(result).toEqual(-1)
})

it('should return rest of balance ', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
    expect(result).toEqual(37)
})

it('should return adults', () => {
    const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 })
})

it('should return empty object', () => {
    const result = getAdults({});
    expect(result).toEqual({})
})