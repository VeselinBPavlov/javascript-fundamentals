function rounding(input) {
    let number = input[0];
    let precision = Math.pow(10 , input[1]);

    let output = Math.round(number * precision) / precision;
    console.log(output);
}