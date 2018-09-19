function solve(input) {
    let evenNums = [];

    for (let i in input) {
        if (i % 2 == 0) {
            evenNums.push(input[i]);
        }
    }

    console.log(evenNums.join(' '));
}

