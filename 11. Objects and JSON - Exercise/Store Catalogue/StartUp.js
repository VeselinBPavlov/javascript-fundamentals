function storeCatalogue(input) {
    let dictionary = new Map();

    for (let product of input) {
        let letter = product[0];

        if (dictionary.has(letter) === false) {
            dictionary.set(letter, new Map());
        }
        let [productName, productPrice] = product.split(' : ');
        let part = dictionary.get(letter);
        part.set(productName, productPrice);
    }

    dictionary = new Map([...dictionary.entries()].sort());

    for (let [letter, productList] of dictionary) {
        let sortedList = new Map([...productList].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase())));
        dictionary.set(letter, sortedList);
    }

    for (let [letter, productList] of dictionary) {
        console.log(letter);
        for (let [product, price] of productList) {
            console.log(`  ${product}: ${price}`);
        }
    }
}

