function findProduct(product) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    for (let fruit of fruits) {
        if (fruit === product) {
            console.log('fruit');
            return;
        }
    }

    for (let vegetable of vegetables) {
        if (vegetable === product) {
            console.log('vegetable');
            return;
        }
    }

    console.log('unknown');
}
