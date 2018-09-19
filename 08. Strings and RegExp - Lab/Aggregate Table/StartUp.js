function aggregateTable(table) {
    let sum = 0;
    let towns = [];

    for (let i = 0; i < table.length; i++) {
        let townData = table[i].split('|').filter(x => x !== '').map(x => x.trim());
        towns.push(townData[0]);
        sum += Number(townData[1]);
    }

    console.log(towns.join(', '));
    console.log(sum);
}
