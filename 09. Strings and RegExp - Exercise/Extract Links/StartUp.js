function extractLinks(text) {
    let pattern = /(www)(\.[A-Za-z0-9-]+)(\.[a-z]+)+/g;
    let emails = [];
    let match;

    for (let sentence of text) {
        while (match = pattern.exec(sentence)) {
            emails.push(match[0]);
        }
    }

    console.log(emails.join('\n'));
}

