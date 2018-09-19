function triangleOfDollars(input) {
    for (let i = 1; i <= input; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
           line += '$';
        }
        console.log(line);
    }
}
