function solve(input) {
    let speed = input[0];
    let area = input[1];

    let output = "";

    let driveRules = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    let maxSpeed = driveRules[area];

    if (speed - maxSpeed > 40) {
        output = "reckless driving";
    } else if (speed - maxSpeed > 20) {
        output = "excessive speeding";
    } else if (speed - maxSpeed > 0) {
        output = "speeding";
    }

    console.log(output);
}
