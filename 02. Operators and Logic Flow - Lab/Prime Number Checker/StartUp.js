function primeChecher(n) {
    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
        console.log(isPrime);
        return;
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}