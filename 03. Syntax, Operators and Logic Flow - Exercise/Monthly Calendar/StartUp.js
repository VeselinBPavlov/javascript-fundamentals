function calendar([day, month, year]) {
    let calendarColumns = 7;
    let selectedDate = new Date(year, month - 1, day);
    let firstDayOfTheMonthDate = new Date(year, month - 1, 1);
    let lastDayOfTheMonth = new Date(year, month, 0);
    let endDate = new Date(year, month -1, lastDayOfTheMonth.getDate() + 7 - lastDayOfTheMonth.getDay());
    let currentDate = new Date(year, month - 1, 1 - firstDayOfTheMonthDate.getDay());
    let output = '<table>\n';
    output += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    while (true){
        if (currentDate.getTime() === endDate.getTime()){
            break;
        }
        output += '  <tr>';
        for (let j = 0; j < calendarColumns; j++) {
            let tag;
            if (currentDate.getTime() < firstDayOfTheMonthDate.getTime()){
                tag = ' class="prev-month"';
            } else if (currentDate.getTime() > lastDayOfTheMonth.getTime()){
                tag = ' class="next-month"';
            } else {
                tag = currentDate.getDate() !== selectedDate.getDate() ? '' : ' class="today"';
            }
            output += `<td${tag}>${currentDate.getDate()}</td>`;
            currentDate.setDate(currentDate.getDate() + 1);
        }
        output += '</tr>\n';
    }
    output += '</table>\n';
    return output;
}