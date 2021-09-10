function rotateArray(array, count) {
    for (let index = 1; index <= count; index++) {
        array.push(array.splice(0, 1));
    }
    console.log(array.join(" "));
}

rotateArray(
    ['1',
        '2',
        '3',
        '4'],
    2
);

rotateArray(
    ['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);