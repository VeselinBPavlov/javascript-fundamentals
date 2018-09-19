function acientVSmemory(input) {
    let result = [];
    let arr = input.join(' ').split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '32656' && arr[i + 1] === '19759' && arr[i + 2] === '32763') {
            let length = arr[i + 4];
            let word = [];
            for (let j = 0; j < length; j++) {
                word.push(arr[i + 6 + j]);
            }
            word = word.map(x => String.fromCharCode(x)).join('');
            result.push(word);
        }
    }
    console.log(result.join('\n'));
}
