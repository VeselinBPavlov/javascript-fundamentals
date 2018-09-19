function countWords(text) {
    let pattern = /\w+/g;
    let match;
    let result = {};

    for (let sentence of text) {
        while (match = pattern.exec(sentence)) {
            if (result.hasOwnProperty(match) == false) {
                result[match] = 0;
            }
            result[match]++;
        }
    }

    console.log(JSON.stringify(result));
}
