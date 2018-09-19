function arithmephile(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let numS = Number(input[i]);
        let product = 1;
        if (numS >= 0 && numS < 10) {
            for (let j = i + 1; j <= i + numS; j ++) {
                product *= input[j];
            }
            result.push(product);
        }
    }
    result = result.sort((a, b) => b - a);

    console.log(result[0]);
}
