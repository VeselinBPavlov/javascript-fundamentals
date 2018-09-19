function captureNumbers(text) {
    let pattern = /\d+/g;
    let result = [];
    let match;

    for (let sentence of text) {
        while (match = pattern.exec(sentence)) {
            result.push(match);
        }
    }
    console.log(result.join(' '));
}
