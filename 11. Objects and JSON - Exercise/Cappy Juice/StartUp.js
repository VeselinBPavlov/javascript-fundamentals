function cappyJuice(input) {
    let juicesArr = {};
    let juiceBottles = {};

    for (let juiceData of input) {
        let [juice, quantity] = juiceData.split(' => ');

        if (juicesArr.hasOwnProperty(juice) == false) {
            juicesArr[juice] = 0;
        }
        juicesArr[juice] += Number(quantity);

        if (juicesArr[juice] >= 1000) {
            juiceBottles[juice] = juicesArr[juice] / 1000;
        }
    }

    for (let juice in juiceBottles) {
        console.log(`${juice} => ${Math.trunc(juiceBottles[juice])}`);
    }
}
