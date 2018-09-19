function modifyAverage(number) {
    let numberString = number.toString();

    function getAVG(numberString) {
        let sum = 0;

        for (let digit of numberString) {
            sum += Number(digit);
        }
        return sum / numberString.length;
    }

    let addNine = (num) => num + '9';
    let average = getAVG(numberString);

    while (average <= 5) {
        numberString = addNine(numberString);
        average = getAVG(numberString);
    }

    console.log(numberString);
}
