function scoreToHTML(str) {
    let objArr = JSON.parse(str);
    let table = '';

    table += '<table>\n';
    table += '\t<tr>';
    for (let key of Object.keys(objArr[0])) {
        table += `<th>${escaping(key)}</th>`;
    }
    table += '</tr>\n';

    for (let obj of objArr) {
        table += '\t<tr>';
        for (let key of Object.keys(obj)) {
            table += `<td>${escaping(obj[key].toString())}</td>`;
        }
        table += '</tr>\n';
    }

    table += '</table>';

    console.log(table);


    function escaping(line) {
        return line.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/'/g, '&#39;');
    }
}
