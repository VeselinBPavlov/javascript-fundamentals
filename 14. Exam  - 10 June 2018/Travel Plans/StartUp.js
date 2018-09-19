function solve(input) {
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];

    let specializedCount = 0;
    let clumsyCount = 0;
    let profit = 0;

    for (let line of input) {
        let [profession, income] = line.split(' : ');
        income = Number(income);
        if (specialized.includes(profession)) {
              //Check
            if (income < 200) {
                continue;
            }
            specializedCount++;
            profit += income - (income * 0.20);
            if (specializedCount % 2 === 0) {
                profit += 200;
            }
        } else if (average.includes(profession)) {
            profit += income;
        } else if (clumsy.includes(profession)) {
            clumsyCount++;
            if (clumsyCount % 2 === 0) {
                profit += income - (income * 0.05);
            } else if (clumsyCount % 3 === 0) {
                profit += income - (income * 0.10);
            } else {
                profit += income;
            }
        }
    }
    console.log(`Final sum: ${profit.toFixed(2)}`);
    if (profit < 1000) {
        let moneyNeed = 1000 - profit;
        console.log(`Mariyka need to earn ${moneyNeed.toFixed(2)} gold more to continue in the next task.`);
    } else {
        let moreOfNeed = profit - 1000;
        console.log(`Mariyka earned ${moreOfNeed.toFixed(2)} gold more.`);
    }
}

solve(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
console.log();
solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])