function hungryProgrammer(meals, commands) {
    let mealsEaten = 0;
    for (let command of commands) {
        command = command.split(' ');
        switch (command[0].toLowerCase()) {
            case 'serve': {
                if (meals.length < 1) {
                    break;
                }
                let lastPortion = meals.pop();
                console.log(`${lastPortion} served!`);
            } break;
            case 'eat': {
                if (meals.length < 1) {
                    break;
                }
                let eatPortion = meals.shift();
                mealsEaten++;
                console.log(`${eatPortion} eaten`);
            } break;
            case `add`: {
                if (command[1] == undefined) {
                    break;
                }
                let meal = command[1];
                meals.unshift(meal);
            } break;
            case 'shift': {
                let start = Number(command[1]);
                let end = Number(command[2]);
                if (start >= 0 && start < meals.length && end >= 0 && end < meals.length
                    && start <= end && start !== undefined && end !== undefined) {
                    let startPortion = meals[start];
                    let endPortion = meals[end];
                    meals.splice(start, 1, endPortion);
                    meals.splice(end, 1, startPortion);
                }
            } break;
            case 'consume': {
                let start = Number(command[1]);
                let end = Number(command[2]);
                if (start >= 0 && start < meals.length && end >= 0 && end < meals.length
                    && start <= end && start !== undefined && end !== undefined) {
                    meals.splice(start, end + 1  - start);
                    mealsEaten += end + 1 - start;
                    console.log('Burp!');
                }
            } break;
            case 'end': {
                if (meals.length > 0) {
                    console.log(`Meals left: ${meals.join(', ')}`);
                } else {
                    console.log(`The food is gone`);
                }
                console.log(`Meals eaten: ${mealsEaten}`);
                return;
            }
        }
    }
}
