function populationInTowns(townsData) {
    let result = new Map();

    for (let town of townsData) {
        let data = town.split(' <-> ');
        if (result.has(data[0]) == false) {
            result.set(data[0], 0);
        }

        result.set(data[0], result.get(data[0]) + Number(data[1]));
    }

    result.forEach((v, k) => console.log(`${k} : ${v}`));
}

