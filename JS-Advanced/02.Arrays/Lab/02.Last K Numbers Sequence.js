function numberSequence(n, k) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        if (i == 0) {
            matrix.push(1);
        } else {
            for (let j = i - k; j < i; j++) {
                if( j >= 0){
                    sum += Number((matrix[j]));
                }
            }
            matrix.push(sum);
        }
    }
    return matrix;
}
console.log(numberSequence(6, 3));
