function pointInRectangle(input) {
    let x = input[0];
    let y = input[1];
    let xMin = input[2];
    let xMax = input[3];
    let yMin = input[4];
    let yMax = input[5];

    if(xMin <= x && x <= xMax && yMin <= y && y <= yMax) {
        console.log("inside");
    } else {
        console.log("outside");
    }
}

