function solve(input) {
    console.log(input.filter((x, i) => i % 2 === 1).map(x => x * 2).reverse().join(' '));
}
