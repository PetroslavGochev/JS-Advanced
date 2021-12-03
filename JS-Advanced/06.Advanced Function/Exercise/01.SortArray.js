function sort(array, argument){
    if(argument == 'asc'){
        array.sort((a, b) => a - b);
    }
    else{
        array.sort((a, b) => b - a);
    }
    return array;
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
console.log(sort([14, 7, 17, 6, 8], 'desc'));
