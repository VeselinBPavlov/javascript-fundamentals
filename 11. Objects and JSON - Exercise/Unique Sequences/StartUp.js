function uniqueSequences(input) {
    let result = new Map();

    for (let line of input) {
        let arr = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let strArr = `[${arr.join(', ')}]`;

        if (result.has(strArr) === false){
            result.set(strArr, arr.length);
        }
    }

    console.log([...result.keys()].sort((a, b) => result.get(a) - result.get(b)).join('\n'));
}