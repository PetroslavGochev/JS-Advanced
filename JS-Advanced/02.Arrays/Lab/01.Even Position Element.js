function evenPostion(arr){
    let matrix = [];
    for(let i = 0; i < arr.length; i+=2){
        matrix.push(arr[i]);
    }
    console.log(matrix.join(' '));
}

evenPostion(['20', '30', '40', '50', '60']);