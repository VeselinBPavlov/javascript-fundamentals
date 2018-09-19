function chessboard(n) {
    let colorOne = '';
    let colorTwo = '';
    console.log('<div class="chessboard">');
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            colorOne = 'black';
            colorTwo = 'white';
        } else {
            colorOne = 'white';
            colorTwo = 'black';
        }

        console.log("<div>");
        for (let j = 1; j <= n; j++) {
            if (j % 2 == 1) {
                console.log(`<span class="${colorOne}"></span>`)
            } else {
                console.log(`<span class="${colorTwo}"></span>`)
            }
        }
        console.log("</div>");
    }
    console.log("</div>");
}
