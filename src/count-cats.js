module.exports = function countCats(matrix) {
    matrix = matrix.flat();
    let k = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] === '^^') {
            k += 1;
        }
    }
    return k;
};
