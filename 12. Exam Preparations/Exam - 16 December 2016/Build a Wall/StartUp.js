function buildWall(input) {
    let concreteCubicPerDay = [];

    while (true) {
        let dailyCubic = 0;
        let isWallReady = true;
        for (let i = 0; i < input.length; i++) {
            if (input[i] < 30) {
                dailyCubic += 195;
                input[i]++;
                isWallReady = false;
            }
        }

        if (isWallReady === false) {
            concreteCubicPerDay.push(dailyCubic);
        } else {
            break;
        }
    }

    let sumCubic = concreteCubicPerDay.reduce((a, b) => a + b);
    let sum = sumCubic * 1900;

    console.log(concreteCubicPerDay.join(', '));
    console.log(`${sum} pesos`);
}
