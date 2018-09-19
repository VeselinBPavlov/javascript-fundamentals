function spiceMustFlow(input) {
    let yields = Number(input[0]);
    let leaving = 0;
    let days = 0;
    let reserve = 0;

    while (yields > 99) {
        leaving = yields - 26;
        reserve += leaving;
        yields -= 10;
        days++;
    }

    reserve -= 26;

    console.log(days);
    if (reserve > 0) {
        console.log(reserve);
    } else {
        console.log(0);
    }
}

