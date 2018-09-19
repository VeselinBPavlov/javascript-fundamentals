function secretData(text) {
    let namePattern = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let phonePattern = /\+[\d-]{10}(?=\s|$)/g;
    let idPattern = /![A-Za-z0-9]+(?=\s|$)/g;
    let basePattern = /_[A-Za-z0-9]+(?=\s|$)/g;

    let result = [];
    let regexArr = [];
    regexArr.push(namePattern);
    regexArr.push(phonePattern);
    regexArr.push(idPattern);
    regexArr.push(basePattern);

    for (let sentence of text) {
        let newSentence = sentence;
        for (let regex of regexArr) {
            newSentence = newSentence.replace(regex, (x) => '|'.repeat(x.length));
        }
        result.push(newSentence);
    }

    console.log(result.join('\n'));
}

