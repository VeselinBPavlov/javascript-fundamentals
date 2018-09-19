function lowestPrice(townsData) {
    let result = new Map();
    for (let townInfo of townsData) {
        let [town, product, price] = townInfo.split(' | ');

        if (!result.has(town)) {
            result.set(town, new Map());
        }
        let productsInCurrentTown = result.get(town);
        if (!productsInCurrentTown.has(product)) {
            productsInCurrentTown.set(product, Number(price));
            continue;
        }
        productsInCurrentTown.set(product, price);
    }

    let cheapestProducts = new Map();
    for (let town of result.keys()) {
        let currentTown = result.get(town);
        for (let product of currentTown.keys()) {
            let price = currentTown.get(product);
            if (!cheapestProducts.has(product)) {
                cheapestProducts.set(product, {price: price, town: town});
            }
            if (cheapestProducts.get(product).price > price) {
                cheapestProducts.set(product, {price: price, town: town});
            }
        }
    }

    for (let product of cheapestProducts.keys()) {
        console.log(`${product} -> ${cheapestProducts.get(product).price} (${cheapestProducts.get(product).town})`);
    }
}
