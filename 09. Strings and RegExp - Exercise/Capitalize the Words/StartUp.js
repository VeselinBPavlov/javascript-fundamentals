function capitalizeWords(str) {
    str = str.toLowerCase().split(' ');
    let result = [];

    for (let word of str) {
        word = word.split('');
        let firstChar = word[0].toUpperCase();
        word.shift();
        word.unshift(firstChar);
        let tempWord = word.join('');
        result.push(tempWord);
    }

    console.log(result.join(' '));
}
