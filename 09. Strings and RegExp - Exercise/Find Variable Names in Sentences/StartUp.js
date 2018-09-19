function findVariable(text) {
    let pattern = /\b_([A-Za-z0-9]+)\b/g;
    let match;
    let result = [];

    while (match = pattern.exec(text)) {
        result.push(match[1]);
    }

    console.log(result.join(','));
}
