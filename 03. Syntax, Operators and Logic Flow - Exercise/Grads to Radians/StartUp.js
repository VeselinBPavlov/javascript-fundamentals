function convertGradsToDegrees(input) {
    input = input % 400;
    let degrees = input * 0.9;
    degrees = degrees < 0 ? 360 + degrees : degrees;

    console.log(degrees);
}