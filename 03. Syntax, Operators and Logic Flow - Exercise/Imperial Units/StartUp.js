function convertInchesToFeet(inches) {
    let feet = Math.floor(inches / 12);
    let remainder = inches % 12;

    console.log(`${feet}'-${remainder}"`)
}