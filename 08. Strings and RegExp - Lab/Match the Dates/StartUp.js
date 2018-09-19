function matchDate(text) {
    let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result;

    for (let data of text) {
        while (result = pattern.exec(data)){
            console.log(`${result[0]} (Day: ${result[1]}, Month: ${result[2]}, Year: ${result[3]})`);
        }
    }
}
