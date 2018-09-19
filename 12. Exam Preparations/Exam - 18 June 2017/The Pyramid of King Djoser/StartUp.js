function pyramidKing(base, increment) {
    let stones = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let floors = 0;

    for (let i = base; i > 0; i -= 2) {
        floors++;
        if (i === 1 || i === 2) {
            gold += (i * i) * increment;
            break;
        }
        stones += ((i - 2) * (i - 2)) * increment;
        if (floors % 5 === 0){
            lapisLazuli += ((i * 4) - 4) * increment;
        } else {
            marble += ((i * 4) - 4) * increment;
        }
    }

    let height = floors * increment;

    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
