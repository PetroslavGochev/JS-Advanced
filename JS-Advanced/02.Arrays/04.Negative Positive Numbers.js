function sort(array) {
    let matrix = [];

    for (let index = 0; index < array.length; index++) {

        if (array[index] < 0) {
            matrix.unshift(array[index]);
        }
        else {
            matrix.push(array[index]);
        }

    }
    return matrix;
}

console.log(sort([7, -2, 8, 9]).join('\r\n'));
console.log(sort([3, -2, 0, -1]).join('\r\n'));