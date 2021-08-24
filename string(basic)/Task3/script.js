const splitString = (text, len) => {
    if (typeof (text) !== 'string') {
        return null
    }
    if (len === undefined) {
        len = 10;
    }
    const strArr = [];
    let startPosition = 0;
    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break
        }
        strArr.push(chunk);
        startPosition += len;
    }
    let res = strArr.map( element => {
        if (element.length < len) {
            let padded = element.padEnd(Math.ceil(element.length / len) * len, '.');
            return padded
        }

        return element
    })
    return res
};

console.log(splitString('Hello, my name is Bohdan',10))