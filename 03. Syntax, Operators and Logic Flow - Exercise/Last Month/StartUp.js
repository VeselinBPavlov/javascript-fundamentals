function lastDayMonth(input) {
    let day = input[0];
    let month = input[1];
    let year = input[2];
    let lastDay = new Date(year, month - 1, day);
    lastDay.setDate(0);

    console.log(lastDay.getDate());
}