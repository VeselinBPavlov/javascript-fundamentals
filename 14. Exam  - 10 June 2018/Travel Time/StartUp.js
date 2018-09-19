function solve(input) {
    let result = {};

    for (let line of input) {
        let [country, town, costs] = line.split(' > ');

        if (result.hasOwnProperty(country) === false) {
            result[country] = {};
        }
        let townArr = Array.from(town);
        townArr[0] = townArr[0].toUpperCase();
        town = townArr.join('');

        if (result[country].hasOwnProperty(town) === false) {
            result[country][town] = costs;
        } else {
            let oldCosts = result[country][town];
            if (oldCosts > costs) {
                result[country][town] = costs;
            }
        }
    }

    let sortedCuntries = Object.keys(result).sort((a, b) => a.localeCompare(b));
    for (let country of sortedCuntries) {
        let sortedTowns = Object.keys(result[country]).sort((a, b) => {
            let diff = result[country][a] - result[country][b];
            return diff;
        });
        let towns = [];
        for (let town of sortedTowns) {
            towns.push(` ${town} -> ${result[country][town]}`)
        }
        console.log(`${country} ->${towns.join('')}`);
    }
}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);