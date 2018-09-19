function galacticElections(input) {
    let totalVotes = 0;
    let elections = {};
    let galaxies = {};
    let winners = {};
    for (let line of input) {
        let system = line['system'];
        let candidate = line['candidate'];
        let votes = Number(line['votes']);

        totalVotes += votes;

        if (elections.hasOwnProperty(candidate) === false) {
            elections[candidate] = {};
            elections[candidate]['all-votes'] = 0;
        }
        if (elections[candidate].hasOwnProperty(system) === false) {
            elections[candidate][system] = 0;
        }
        elections[candidate][system] += votes;

        if (galaxies.hasOwnProperty(system) === false) {
            galaxies[system] = 0;
        }
        galaxies[system] += votes;
    }

    for (let system in galaxies) {
        let result = 0;
        let bestResult = 0;
        let bestCandidate = ''
        for (let candidate in elections) {
            if (elections[candidate].hasOwnProperty(system)) {
                result = elections[candidate][system];
                if (result > bestResult) {
                    bestResult = result;
                    bestCandidate = candidate;
                }
            }
        }
        if (winners.hasOwnProperty(bestCandidate) === false) {
            winners[bestCandidate] = {};
            winners[bestCandidate]['total-votes'] = 0;
        }
        if (winners[bestCandidate].hasOwnProperty(system) === false) {
            winners[bestCandidate][system] = 0;
        }
        winners[bestCandidate][system] = galaxies[system];
        winners[bestCandidate]['total-votes'] += galaxies[system];
    }

    let sortedCandidates = Object.keys(winners).sort((c1, c2) => {
        let difference = winners[c2]['total-votes'] - winners[c1]['total-votes'];
        return difference;
    });

    let president = sortedCandidates[0];
    let vicePresident = sortedCandidates[1];
    let bestPercent = (winners[president]['total-votes'] / totalVotes) * 100;

    if (bestPercent > 50 && vicePresident !== undefined) {
        console.log(`${president} wins with ${winners[president]['total-votes']} votes`);
        console.log(`Runner up: ${vicePresident}`);
        let sortedWinGalaxies = Object.keys(winners[vicePresident]).sort((g1, g2) => {
            let difference = winners[vicePresident][g2] - winners[vicePresident][g1];
            return difference;
        });
        for (let galaxy of sortedWinGalaxies) {
            if (galaxy !== 'total-votes') {
                console.log(`${galaxy}: ${winners[vicePresident][galaxy]}`);
            }
        }
    } else if (vicePresident == undefined) {
        console.log(`${president} wins with ${winners[president]['total-votes']} votes`);
        console.log(`${president} wins unopposed!`);
    } else {
        let secondPrecent = (winners[vicePresident]['total-votes'] / totalVotes) * 100;
        console.log(`Runoff between ${president} with ${Math.floor(bestPercent)}% and ${vicePresident} with ${Math.floor(secondPrecent)}%`);
    }
}
