function calculateBill(strArr) {
    let products = [];
    let bill = 0;

    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 == 0) {
            products.push(strArr[i]);
        } else {
            bill += Number(strArr[i]);
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${bill}`);
}