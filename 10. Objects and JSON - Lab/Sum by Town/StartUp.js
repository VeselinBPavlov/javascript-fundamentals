function sumByTown(townData) {
    let obj = {};

    for (let i = 0; i < townData.length; i += 2) {
        let town = townData[i];
        let income = Number(townData[i + 1]);

        if (obj.hasOwnProperty(town) == false) {
            obj[town] = 0;
        }

        obj[town] += income;
    }

    console.log(JSON.stringify(obj));
}
