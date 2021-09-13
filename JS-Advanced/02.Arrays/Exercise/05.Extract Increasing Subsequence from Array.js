function subsequence(array) {
    let newArray = [];
    for (const value of array) {
        if (newArray[newArray.length - 1] <= value || newArray.length == 0) {
            newArray.push(value);
        }
    }
    return newArray;
}

console.log(subsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(subsequence([1,
    2,
    3,
    4]
));

console.log(subsequence([20,
    3,
    2,
    15,
    6,
    1]
));