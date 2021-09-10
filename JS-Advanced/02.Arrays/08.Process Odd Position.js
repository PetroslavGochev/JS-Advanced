function oddPosition(array){
    let reverseArray = [];
    for (let index = 1; index < array.length; index+=2) {
        let value = array[index]*2;
        reverseArray.push(value); 
    }
    return reverseArray.reverse();
}

console.log(oddPosition([10, 15, 20, 25]));
console.log(oddPosition([3, 0, 10, 4, 7, 3]));