function biggerHalf(array){
    let firstIndex = Math.floor(array.length/2);
    return array.sort(function(a,b) { return a - b;}).splice(firstIndex);
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log(biggerHalf([4, 7, 2, 5]));