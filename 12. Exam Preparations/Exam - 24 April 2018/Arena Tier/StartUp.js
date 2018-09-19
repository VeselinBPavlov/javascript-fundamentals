function arenaTier(input) {
    let gladiators = {};
    for (let line of input) {
        if (line.includes(' -> ')) {
            let [name, item, score] = line.split(' -> ');
            if (gladiators.hasOwnProperty(name) === false) {
                gladiators[name] = {};
                gladiators[name]['total-score'] = 0;
            }
            if (gladiators[name].hasOwnProperty(item) === false) {
                gladiators[name][item] = Number(score);
                gladiators[name]['total-score'] += Number(score);
            } else if (gladiators[name][item] < score) {
                gladiators[name]['total-score'] -= gladiators[name][item];
                gladiators[name]['total-score'] += Number(score);
                gladiators[name][item] = Number(score);
            }
        } else if (line.includes(' vs ')) {
            let [firstGladiator, secondGladiator] = line.split(' vs ');
            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                for (let item in gladiators[firstGladiator]) {
                    if (item === 'total-score') {
                        continue;
                    }
                    let g1Score = gladiators[firstGladiator][item];
                    let g2Score = gladiators[secondGladiator][item];
                    if (g1Score && g2Score) {
                        if (g1Score > g2Score) {
                            delete gladiators[secondGladiator];
                            break;
                        } else if (g1Score < g2Score) {
                            delete gladiators[firstGladiator];
                            break;
                        }
                    }
                }
            }
        } else {
            break;
        }
    }

    let sortedGladiators = Object.keys(gladiators).sort((g1, g2) => {
        let diffInScore = gladiators[g2]['total-score'] - gladiators[g1]['total-score'];
        if (diffInScore === 0) {
            return g1.localeCompare(g2);
        }
        return diffInScore;
    });

    for (let gladiator of sortedGladiators) {
        console.log(`${gladiator}: ${gladiators[gladiator]['total-score']} skill`);
        let sortedItems = Object.keys(gladiators[gladiator]).filter(i => i !== 'total-score').sort((i1, i2) => {
            let diffInScore = gladiators[gladiator][i2] - gladiators[gladiator][i1];
            if (diffInScore === 0) {
                return i1.localeCompare(i2);
            }
            return diffInScore;
        });

        for (let item of sortedItems) {
            console.log(`- ${item} <!> ${gladiators[gladiator][item]}`);
        }
    }
}