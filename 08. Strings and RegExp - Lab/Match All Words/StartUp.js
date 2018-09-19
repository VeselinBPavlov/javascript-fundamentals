function matchWords(text) {
    console.log(text.split(/\W+/).filter(s => s!== '').join('|'));
}

