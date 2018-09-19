function censor(text, censorWords) {
    for (let word of censorWords) {
        text = text.replace(new RegExp(word, 'g'), '-'.repeat(word.length));
    }

    console.log(text);
}



