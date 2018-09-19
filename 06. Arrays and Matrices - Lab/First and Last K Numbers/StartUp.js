function solve(input) {
    let count = input.shift();
    console.log(input.slice(0, count).join(' '));
    console.log(input.slice(input.length - count, count + 1).join(' '));
}
