function solve(input) {
    let maxNum = 0;

    if (input[0] >= input [1] && input[0] >= input[2]) {
        maxNum = input[0];
    } else if (input[1] >= input [0] && input[1] >= input[2]) {
        maxNum = input[1];
    } else if (input[2] >= input [0] && input[2] >= input[1]) {
        maxNum = input[2];
    }

    console.log(maxNum);
}