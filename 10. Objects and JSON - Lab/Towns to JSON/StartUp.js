function townsToJSON(townData) {
    let result = [];
    let keys =  townData[0].split(/\s*\|\s*/).filter(x => x !== '');

    for (let str of townData.slice(1)) {
        let [town, lat, long] = str.split(/\s*\|\s*/).filter(x => x !== '');
        let obj = {};
        obj[keys[0]] = town;
        obj[keys[1]] = Number(lat);
        obj[keys[2]] = Number(long);

        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
