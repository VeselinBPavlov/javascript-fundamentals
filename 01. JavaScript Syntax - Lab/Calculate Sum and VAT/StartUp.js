function sumNumbersPlusVat(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum+=input[i];
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(sum);
    console.log(vat);
    console.log(total);
}