function heroicInventory(input) {
    let result = [];

    for (let heroData of input) {
        let [name, level, items] = heroData.split(' / ');
        let hero = {};

        hero['name'] = name;
        hero['level'] = Number(level);
        if (items !== undefined) {
            hero['items'] = items.split(', ');
        } else {
            hero['items'] = [];
        }

        result.push(hero);
    }

    console.log(JSON.stringify(result));
}
