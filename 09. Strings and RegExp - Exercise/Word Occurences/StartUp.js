function wordOccurences(sentence, word) {
    let pattern = new RegExp(`\\b${word}\\b`, 'gi');
    let match = sentence.match(pattern);

    if (match !== null) {
        console.log(match.length);
    } else {
        console.log(0);
    }
}
