function subSum(array, firstIndex, lastIndex){
    if(!Array.isArray(array)){
        return NaN;
    }
    if(firstIndex < 0){
        firstIndex = 0;
    }
    if(lastIndex > array.length){
        lastIndex = array.length - 1;
    }

     return array.slice(firstIndex, lastIndex+1).map(Number).reduce((a,b)=>a+b,0);
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));