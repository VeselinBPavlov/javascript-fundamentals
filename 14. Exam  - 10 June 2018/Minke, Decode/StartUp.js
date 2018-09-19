function solve(input) {
    let firstIndex = Number(input.shift());
    let secondIndex = Number(input.shift());
    let replacement = input.shift();
    let sentence = input.shift();

    let countryPattern = /[A-Z][a-z]+[A-Z]/;
    let townPattern = /\d{3}(\.\d+)?/g;

    let match = countryPattern.exec(sentence);
    let wrongCountry = match[0];



    let wrongWord = wrongCountry.slice(firstIndex, secondIndex + 1);
    let countryUpp = wrongCountry.replace(wrongWord, replacement);

    let countryArr = Array.from(countryUpp);
    countryArr[countryArr.length - 1] = countryArr[countryArr.length - 1].toLowerCase();
    let country = countryArr.join('');

    let digitMatch;
    let townArr = [];

    while (digitMatch = townPattern.exec(sentence)) {
        let number = Number(digitMatch[0]);
        if (Number.isInteger(number) === false) {
            number = Math.ceil(number);
        }
        townArr.push(String.fromCharCode(number));
    }

    townArr[0] = townArr[0].toUpperCase();
    let town = townArr.join('');


    console.log(`${country} => ${town}`);
}

solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
console.log();

solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);
