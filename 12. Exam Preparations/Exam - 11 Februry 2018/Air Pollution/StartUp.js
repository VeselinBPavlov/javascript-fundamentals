function airPopulation(arrStr, forces) {
    let matrix = [];
    let result = [];
    for (let str of arrStr) {
        let row = str.split(' ').map(x => Number(x));
        matrix.push(row);
    }

    for (let line of forces) {
        let [force, place] = line.split(' ');
        place = Number(place);

        switch (force) {
            case 'breeze': {
                for (let i = 0; i < 5; i++) {
                    matrix[place][i] -= 15;
                    if (matrix[place][i] < 0) {
                        matrix[place][i] = 0;
                    }
                }
            } break;

            case 'gale': {
                for (let i = 0; i < 5; i++) {
                    matrix[i][place] -= 20;
                    if (matrix[place][i] < 0) {
                        matrix[place][i] = 0;
                    }
                }
            } break;

            case 'smog': {
                let power = place;
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        matrix[i][j] += power;
                    }
                }
            } break;
        }
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matrix[i][j] >= 50) {
                let coordinates = '';
                coordinates += `[${i}-${j}]`;
                result.push(coordinates);
            }
        }
    }

    if (result.length !== 0) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

