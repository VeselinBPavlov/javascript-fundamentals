function solve(matrix) {
    let straight = 0;
    let back = 0;

    for (let row = 0; row < matrix.length; row++) {
        straight += matrix[row][row];
        back += matrix[row][matrix[row].length -1 - row]
    }

    console.log(straight, back);
}