function extractText(str) {
    let textWords = [];
    let start = str.indexOf('(');


    while (start > -1) {
        let end = str.indexOf(')' , start);

        if (end == -1) {
            break;
        }

        textWords.push(str.substring(start + 1, end));
        start = str.indexOf('(', end);
    }

    console.log(textWords.join(', '));
}