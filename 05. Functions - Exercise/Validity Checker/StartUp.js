function validityChecker(coordinations) {
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            x1 = coordinations[0];
            y1 = coordinations[1];
        } else if (i === 1) {
            x1 = coordinations[2];
            y1 = coordinations[3];
        } else if (i === 2) {
            x1 = coordinations[0];
            y1 = coordinations[1];
            x2 = coordinations[2];
            y2 = coordinations[3];
        }

        let result = getCoordinates(x1, y1, x2, y2);

        if (Number.isInteger(result)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    function getCoordinates(x1, y1, x2, y2) {
        let result = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));

        return result;
    }
}
