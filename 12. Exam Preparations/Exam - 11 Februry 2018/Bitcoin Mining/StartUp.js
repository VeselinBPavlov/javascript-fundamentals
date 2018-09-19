function bitcoinMining(input) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let firstDayToByBitcoin = 0;
    let tradersMoney = 0;
    let boughtBitcoin = 0;

    for (let i = 0; i < input.length; i++) {
        let diggedGramsGold = Number(input[i]);
        let earnMoney = 0;
        if ((i + 1) % 3 === 0) {
            earnMoney = (diggedGramsGold - (diggedGramsGold * 0.3)) * goldPrice;
        } else {
            earnMoney = diggedGramsGold * goldPrice;
        }

        tradersMoney += earnMoney;

        while (tradersMoney >= bitcoinPrice) {
            if (tradersMoney >= bitcoinPrice && boughtBitcoin === 0) {
                boughtBitcoin++;
                firstDayToByBitcoin = i + 1;
                tradersMoney -= bitcoinPrice;
            } else if (tradersMoney >= bitcoinPrice) {
                boughtBitcoin++;
                tradersMoney -= bitcoinPrice;
            }
        }
    }

    tradersMoney = Math.round(tradersMoney*100)/100;

    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (boughtBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayToByBitcoin}`);
    }
    console.log(`Left money: ${tradersMoney.toFixed(2)} lv.`);
}
