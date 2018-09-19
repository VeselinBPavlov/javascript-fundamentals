function diagonalAttack(inputData) {
    let matrix = [];

    for (let i = 0; i < inputData.length; i++) {
        matrix[i] = inputData[i].split(' ').map(e => Number(e));
    }

    let sum = (a, b) => a + b;
    let d1Sum = matrix.map((e, i) => e[i]).reduce(sum);
    let d2Sum = matrix.map((e, i) => e[e.length - 1 - i]).reduce(sum);

    if (d1Sum === d2Sum){
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i === j || matrix[i].length - 1 - j === i){
                    continue;
                }
                matrix[i][j] = d1Sum;
            }
        }
    }

    matrix.forEach(e => console.log(e.join(' ')));
}