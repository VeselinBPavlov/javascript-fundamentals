function solve(input) {
    let islands = {
        "Tuvalu": [1, 1, 3, 3],
        "Tonga": [0, 6, 2, 8],
        "Cook": [4, 7, 9, 8],
        "Samoa": [5, 3, 7, 6],
        "Tokelau": [8, 0, 9, 1]
    };

    for (let i = 0; i < input.length; i += 2) {
        let x = Number(input[i]);
        let y = Number(input[i + 1]);

        let tresurePlace = getTresurePlace(islands, x, y);

        console.log(tresurePlace);
    }

    function getTresurePlace(islands, x, y) {
        let place = "";

        for (let island in islands) {
            let coordinates = islands[island];
            let xMin = coordinates[0];
            let yMin = coordinates[1];
            let xMax = coordinates[2];
            let yMax = coordinates[3];

            if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
                place = island;
                break;
            } else {
                place = "On the bottom of the ocean";
            }
        }
        return place;
    }
}
