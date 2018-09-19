function figureOf4Squares(n) {
    if (n == 2) {
        console.log("+".repeat(3));
    } else {
        console.log("+" + ('-'.repeat(n - 2)) + "+" + ('-'.repeat(n - 2)) + "+");

        for (let i = 1; i < n / 2 - 1; i++) {
            console.log("|" + (" ".repeat(n - 2)) + "|" + (" ".repeat(n - 2)) + "|");
        }
        console.log("+" + ('-'.repeat(n - 2)) + "+" + ('-'.repeat(n - 2)) + "+");

        for (let i = 1; i < n / 2 - 1; i++) {
            console.log("|" + (" ".repeat(n - 2)) + "|" + (" ".repeat(n -2 )) + "|");
        }
        console.log("+" + ('-'.repeat(n - 2)) + "+" + ('-'.repeat(n - 2)) + "+");
    }
}

figureOf4Squares(4);