function magicMatrix(matrix){
    let sum = 0;
  for (let index = 0; index < matrix.length; index++) {
      if (index == 0){
          sum = matrix[index].reduce((a,b) => a + b, 0);
      }
      else {
          if(sum != matrix[index].reduce((a,b) => a + b, 0)){
              return false;
          }
      }     
  }
  return true;
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));
console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));