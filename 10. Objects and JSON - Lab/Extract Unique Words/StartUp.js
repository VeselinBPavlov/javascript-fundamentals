function extractUniqueWord(arr) {
    let uniqueWords = new Set();
    for (let line of arr) {
        let currentWords = line.split(/\W/g)
            .filter(s => s !== '')
            .map(s => s.toLowerCase());
        for (let word of currentWords) {
            uniqueWords.add(word);
        }
    }

    console.log(Array.from(uniqueWords).join(', '));
}

