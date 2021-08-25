export const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let res = [...arr];
    return res.reverse();
}
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


export const withdraw = (clients, balances, client, amount) => {
    let index = clients.indexOf(client);
    let result = balances
    if (balances[index] < amount) {

        return -1
    }
    result[index] = balances[index] - amount;
    return balances[index]

}


withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50);




export const getAdults = (obj) => {
        let res = {};
        for (let value in obj) {
            if (obj[value] >= 18) {
                res[value] = obj[value]
            }
        }
        return res;
    }
    // examples
getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }