function solve(input) {
    let valid = [];
    let invalid = [];

    let firstLine = input.shift();
    let delimiter = input.shift();

    let [company1, company2, company3] = firstLine.split(delimiter);

    for (let sentence of input) {
        sentence = sentence.toLowerCase();
        if (sentence.indexOf(company1) > -1 && sentence.indexOf(company2) > -1 && sentence.indexOf(company3) > -1) {
            valid.push(sentence);
        } else {
            invalid.push(sentence);
        }
    }

    if (valid.length !== 0) {
        console.log(`ValidSentences`);
        for (let i = 0; i < valid.length; i++) {
            console.log(`${i + 1}. ${valid[i]}`);
        }
    }
    if (valid.length !== 0 && invalid.length !== 0) {
        console.log('='.repeat(30));
    }
    if (invalid.length !== 0) {
        console.log(`InvalidSentences`);
        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i + 1}. ${invalid[i]}`);
        }
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@, ",
    "Mincho  e koftipochivkaltd Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);