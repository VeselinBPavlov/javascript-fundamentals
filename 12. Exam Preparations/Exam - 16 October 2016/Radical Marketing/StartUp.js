function radicalMarketing(input) {
    let result = {};

    for (let line of input) {
        if (line.includes('-') === false) {
            if (result.hasOwnProperty(line) === false) {
                result[line] = {'countIn': 0, 'countOut': 0, 'subscribers': []};
            }
        } else {
            let [firstPerson, secondPerson] = line.split('-');
            if (result.hasOwnProperty(firstPerson) === false || result.hasOwnProperty(secondPerson) === false) {
                continue;
            }
            if (result[secondPerson]['subscribers'].includes(firstPerson) === false) {
                result[secondPerson]['subscribers'].push(firstPerson);
                result[firstPerson]['countIn']++;
                result[secondPerson]['countOut']++;
            }
        }
    }

    let sortedPersons = Object.keys(result).sort((p1, p2) => {
        let diff = result[p2]['countOut'] - result[p1]['countOut'];
        if (diff === 0) {
            return result[p2]['countIn'] - result[p1]['countIn'];
        }
        return diff;
    });

    let mip = sortedPersons[0];
    console.log(mip);
    let count = 1;
    for (let subscriber of result[mip]['subscribers']) {
        console.log(`${count}. ${subscriber}`);
        count++;
    }
}