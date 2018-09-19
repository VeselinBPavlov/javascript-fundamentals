function evenOdd(n) {
    if (n < 0) {
        n = n * -1;
    }

    if (n % 2 == 0) {
        console.log('even');
    } else if (n % 2 == 1) {
        console.log('odd');
    }
    else {
        console.log('invalid');
    }
}