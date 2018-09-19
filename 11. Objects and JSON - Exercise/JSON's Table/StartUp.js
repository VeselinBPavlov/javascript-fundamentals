function jsonTable(input) {
    let result = '';

    result += '<table>\n';
    for (let employeeData of input) {
        let employee = JSON.parse(employeeData);
        let name = employee['name'];
        let position = employee['position'];
        let salary = employee['salary'];

        result += '\t<tr>\n';
        result += `\t\t<td>${name}</td>\n`;
        result += `\t\t<td>${position}</td>\n`;
        result += `\t\t<td>${Number(salary)}</td>\n`
        result += '\t<tr>\n';
    }
    result += '</table>';

    console.log(result);
}
