function escaping(input) {
    let result = '<ul>\n';
    for (let line of input) {
        let escapedLine = line.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;');
        result += `  <li>${escapedLine}</li>\n`;
    }
    result += '</ul>';

    console.log(result);
}