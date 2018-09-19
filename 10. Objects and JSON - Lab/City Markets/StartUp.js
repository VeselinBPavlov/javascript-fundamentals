function cityMarkets(marketsData) {
    let result = new Map();

    for (let market of marketsData) {
        let [town, product, sales] = market.split(' -> ');
        let [quantity, price] = sales.split(' : ');

        if (result.has(town) == false) {
            result.set(town, new Map);
        }
        let tempTown = result.get(town);

        if (tempTown.has(product) == false) {
            tempTown.set(product, 0);
        }

        tempTown.set(product, tempTown.get(product) + (Number(quantity) * Number(price)));
    }

    for (let town of result.keys()) {
        console.log(`Town - ${town}`);
        for (let product of result.get(town).keys()) {
            console.log(`$$$${product} : ${result.get(town).get(product)}`);
        }
    }
}