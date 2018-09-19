function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];

    let shortestRoad = "";

    let firstDistance = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
    let secondDistance = Math.sqrt(((x3 - x2) * (x3 - x2)) + ((y3 - y2) * (y3 - y2)));
    let thirdDistance = Math.sqrt(((x3 - x1) * (x3 - x1)) + ((y3 - y1) * (y3 - y1)));

    let distance1 = firstDistance + secondDistance;
    let distance2 = secondDistance + thirdDistance;
    let distance3 = thirdDistance + firstDistance;

    let shortestDistance = Math.min(distance1, distance2, distance3);

    if (shortestDistance === distance1) {
        shortestRoad = "1->2->3";
    } else if (shortestDistance === distance2) {
        shortestRoad = "1->3->2";
    } else if (shortestDistance === distance3) {
        shortestRoad = "2->1->3";
    }

    console.log(`${shortestRoad}: ${shortestDistance}`);
}
