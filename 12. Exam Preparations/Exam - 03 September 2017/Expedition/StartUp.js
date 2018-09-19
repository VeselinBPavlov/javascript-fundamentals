function expedition(primaryMatrix, secondaryMatrix, overlays, coordinates) {
    for (let overlay of overlays) {
        let overRow = overlay[0];
        for (let row = 0; row < secondaryMatrix.length; row++, overRow++) {
            if (overRow >= primaryMatrix.length) {
                break;
            }
            let overCol = overlay[1];
            for (let col = 0; col < secondaryMatrix[row].length; col++, overCol++) {
                if (overCol >= primaryMatrix[overRow].length) {
                    break;
                }
                let num1 = secondaryMatrix[row][col];
                let num2 = primaryMatrix[overRow][overCol];
                if (num1 === 1 && num2 === 1) {
                    num2 = 0;
                } else if (num1 === 0 && num2 === 0) {
                    num2 = 0;
                } else {
                    num2 = 1;
                }
                primaryMatrix[overRow][overCol] = num2;
            }
        }
    }

    let steps = 1;
    let stepRow = coordinates[0];
    let stepCol = coordinates[1];
    let move = '';

    while (true) {
        if (stepRow + 1 < primaryMatrix.length && primaryMatrix[stepRow + 1][stepCol] === 0 && move !== "up") {
            stepRow++;
            move = "down";
        } else if (stepCol + 1 < primaryMatrix[stepRow].length && primaryMatrix[stepRow][stepCol + 1] === 0 && move !== "left") {
            stepCol++;
            move = "right";
        } else if (stepRow - 1 >= 0 && primaryMatrix[stepRow - 1][stepCol] === 0 && move !== "down") {
            stepRow--;
            move = "up";
        } else if (stepCol - 1 >= 0 && primaryMatrix[stepRow][stepCol - 1] === 0 && move !== "right") {
            stepCol--;
            move = "left";
        } else {
            break;
        }
        steps++;
    }

    console.log(steps);

    if (stepRow === primaryMatrix.length - 1) {
        console.log("Bottom")
    } else if (stepRow === 0) {
        console.log("Top")
    } else if (stepCol === 0) {
        console.log("Left")
    } else if (stepCol === primaryMatrix[stepRow].length - 1) {
        console.log("Right")
    } else if (stepRow < primaryMatrix.length / 2 && stepCol >= primaryMatrix[stepRow].length / 2) {
        console.log("Dead end 1");
    } else if (stepRow < primaryMatrix.length / 2 && stepCol < primaryMatrix[stepRow].length / 2) {
        console.log("Dead end 2");
    } else if (stepRow >= primaryMatrix.length / 2 && stepCol < primaryMatrix[stepRow].length / 2) {
        console.log("Dead end 3");
    } else if (stepRow >= primaryMatrix.length / 2 && stepCol >= primaryMatrix[stepRow].length / 2) {
        console.log("Dead end 4");
    }
}


