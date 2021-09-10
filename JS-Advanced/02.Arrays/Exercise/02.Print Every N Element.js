function printEveryNelement(array, count) {
    let newArray = [];
    for (let index = 0; index < array.length; index += count) {
        newArray.push(array[index]);
    }
    return newArray;
}

console.log(printEveryNelement(
    ['5',
        '20',
        '31',
        '4',
        '20'],
    2
));

console.log(printEveryNelement(
    ['dsa',
        'asd',
        'test',
        'tset'],
    2
));

console.log(printEveryNelement(
    ['1',
        '2',
        '3',
        '4',
        '5'],
    6
));