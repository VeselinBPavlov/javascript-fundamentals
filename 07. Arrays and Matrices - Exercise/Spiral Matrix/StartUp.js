function spiralMatrix(rows, columns) {
    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = new Array(columns);
    }

    let target = columns * rows;
    let row = 0;
    let col = 0;
    let count = 0;
    columns--;

    while (count < target){
        for (let idx = 0; idx < rows; idx++, col++) {
            matrix[row][col] = ++count;
        }
        rows--;
        col--;

        row++;
        for (let idx = 0; idx < columns; idx++, row++) {
            matrix[row][col] = ++count;
        }
        columns--;
        row--;

        col--;
        for (let idx = 0; idx < rows; idx++, col--) {
            matrix[row][col] = ++count;
        }
        rows--;
        col++;

        row--;
        for (let idx = 0; idx < columns; idx++, row--) {
            matrix[row][col] = ++count;
        }
        columns--;

        row++;
        col++;
    }

    matrix.forEach(e => console.log(e.join(' ')));
}
