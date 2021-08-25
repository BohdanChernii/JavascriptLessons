export const getMinSquaredNumber = arr => {
    if (arr.length === 0) {
        return null
    }
    if (!Array.isArray(arr)) {
        return null
    }
    let result = arr.map(num => Math.abs(num));
    const min = Math.min(...result) ** 2;
    return min;
}