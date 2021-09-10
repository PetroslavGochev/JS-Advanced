function diagonalSum(matrix) {
    let firstSum = 0;
    let secondSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
    }
    let col = 0;
    for (let row = matrix.length - 1; row >= 0; row--) {
        secondSum += matrix[col][row];
        col++;
    }
    console.log([firstSum, secondSum].join(' '));
}

diagonalSum(
    [[20, 40],
    [10, 60]]
);

diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);