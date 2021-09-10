function biggestElement(matrix){
    let maxElement = -100000;
   for (const row of matrix) {
      let maxElementFromRow = Math.max(...row);
      if(maxElementFromRow > maxElement){
          maxElement = maxElementFromRow;
      }
   }
   return maxElement;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ))

   console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))