function countingLetters(str, letter) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (currentLetter === letter) {
            counter++;
        }
    }

    console.log(counter);
}