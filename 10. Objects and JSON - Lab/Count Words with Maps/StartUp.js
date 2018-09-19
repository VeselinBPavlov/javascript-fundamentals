function countWords(text) {
    let result = new Map();
    for (let line of text) {
        let wordsArray = line.split(/\W/g)
            .filter(s => s !== '');

        for (let word of wordsArray) {
            let key = word.toLowerCase();
            if (result.has(key) == false) {
                result.set(key, 0);
            }

            result.set(key, result.get(key) + 1);
        }
    }
    result = new Map([...result].sort());

    result.forEach((v, k) => console.log(`'${k}' -> ${v} times`))
}
