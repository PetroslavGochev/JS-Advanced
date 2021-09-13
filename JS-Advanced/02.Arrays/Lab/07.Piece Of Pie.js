function pieceOfPie(array, start, end) {
    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end) + 1;
    let count = endIndex - startIndex;
    return array.splice(startIndex, count);
}

console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(pieceOfPie(
    ['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));