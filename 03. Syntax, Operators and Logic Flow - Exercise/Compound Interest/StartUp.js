function calcInterest(input) {
    let principal = input[0];
    let interest = input[1] / 100;
    let frequency = 12 / input[2];
    let time = input[3];

    let f = principal * Math.pow(1 + ( interest / frequency), frequency * time);

    console.log(f.toFixed(2));
}