function sumEqualColumn(matrix) {
    let comparingSum = matrix[0].reduce((a, b) => a + b);

    for (let row = 1; row < matrix.length; row++) {
        let tempRowSum = matrix[row].reduce((a, b) => a + b);

        if (tempRowSum !== comparingSum) {
            console.log(false);
            return;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let tempColSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            tempColSum += matrix[col][row];
        }

        if (tempColSum !== comparingSum) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}

