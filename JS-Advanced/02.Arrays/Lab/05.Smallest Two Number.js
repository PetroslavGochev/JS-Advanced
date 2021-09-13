function smallestTwoNumbers(array){
    return array.sort((a,b) => a - b).slice(0, 2);    
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));