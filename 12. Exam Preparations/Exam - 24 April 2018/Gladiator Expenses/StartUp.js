function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let costs = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 12 === 0) {
            costs += armourPrice;
        }
        if (i % 6 === 0) {
            costs += shieldPrice;
        }
        if (i % 3 === 0) {
            costs += swordPrice;
        }
        if (i % 2 === 0) {
            costs += helmetPrice;
        }
    }

    console.log(`Gladiator expenses: ${costs.toFixed(2)} aureus`);
}
