function surveyParser(input) {
    let dataPattern = /<svg>(.+?)<\/svg>/gs;
    let headingPattern = /<cat><text>((.|\n)*)\[((.|\n)*)]((.|\n)*)<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
    let ratingPattern = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/g;

    let dataMatch = input.match(dataPattern);
    if (dataMatch === null) {
        console.log(`No survey found`);
        return;
    }

    let headingMatch = input.match(headingPattern);
    if (headingMatch === null) {
        console.log('Invalid format');
        return;
    }

    let ratingMatch = input.match(ratingPattern);
    if (ratingPattern === null) {
        console.log('Invalid format');
        return;
    }

    let surveyLabel = headingPattern.exec(input);
    let label = surveyLabel[3];

    let ratings;
    let countVoters = 0;
    let sumRatings = 0;

    while (ratings = ratingPattern.exec(input)) {
        let vote = Number(ratings[1]) * Number(ratings[2]);
        countVoters += Number(ratings[2]);
        sumRatings += vote;
    }

    let voteResult = sumRatings / countVoters;
    let roundedResult = Math.round(voteResult * 100) / 100;

    console.log(`${label}: ${roundedResult}`);
}


